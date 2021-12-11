import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import FormField from '../Field/FormField';
import FormOptionField from '../Field/FormOptionField';
import persons from 'projectManager.json';
import assigned from 'assignedTo.json';
import status from 'status.json';
import project from 'project.json';
import { ProjectSchema } from 'utils/yup';
import { Project } from 'types';
interface IProjectForm {
    isEditAvailable: boolean;
    projectName: string | undefined;
}
const ProjectForm: React.FC<IProjectForm> = ({
    isEditAvailable,
    projectName,
}) => {
    const actualName = projectName;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Project>({ resolver: yupResolver(ProjectSchema) });
    const onSubmit = handleSubmit((values) => {
        if (isEditAvailable) {
            project.map((project:any) => {
                if (project.name === actualName) {
                    project = values;
                    toast.success('Project edited successfully!');
                }
            });
        } else {
            project.push(values);
            toast.success('Project created successfully!');
        }
    });
    return (
        <main className="flex flex-col ">
            <aside className="flex flex-row border-b-2 border-gray-200 px-2">
                <Link href="/">
                    <a className="font-bold flex flex-row">
                        <AiOutlineArrowLeft className="h-6 w-6" />
                        Back
                    </a>
                </Link>
                <h3 className="font-bold mx-4 xl:text-center">{isEditAvailable? 'Edit Project' : 'Add Project'}</h3>
            </aside>
            <form
                onSubmit={onSubmit}
                className="flex flex-col justify-start items-start my-5 px-2  w-full container mx-auto xl:w-2/4"
            >
                <FormField
                    inputName="name"
                    labelName="Project Name"
                    register={register}
                    inputType="text"
                    errors={errors.name}
                />
                <FormField
                    inputName="description"
                    labelName="Description"
                    register={register}
                    inputType="text"
                    errors={errors.description}
                />
                <FormOptionField
                    inputName="projectManager"
                    labelName="Project Manager"
                    register={register}
                    errors={errors.projectManager}
                    options={persons}
                />
                <FormOptionField
                    inputName="assignedTo"
                    labelName="Assigned to"
                    register={register}
                    errors={errors.assignedTo}
                    options={assigned}
                />
                <FormOptionField
                    inputName="status"
                    labelName="Status"
                    register={register}
                    errors={errors.status}
                    options={status}
                />
                <button
                    type="submit"
                    className="px-3 mx-1 py-2 rounded bg-red-600  font-roboto  text-white hover:bg-red-800 transition ease-in"
                >
                    {' '}
                    {isEditAvailable ? 'Edit Project' : 'Create Project'}
                </button>
            </form>
        </main>
    );
};

export default ProjectForm;
