import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { ProjectSchema } from 'utils/yup';
import FormField from '../Field/FormField';
import { Project } from 'types';
import persons from 'projectManager.json';
import assigned from 'assignedTo.json';
import status from 'status.json';
import FormOptionField from '../Field/FormOptionField';
const ProjectForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Project>({ resolver: yupResolver(ProjectSchema) });
    const onSubmit = handleSubmit((values) => console.log(values));
    return (
        <main className="flex flex-col  ">
            <aside className="flex flex-row border-b-2 border-gray-200 px-2">
                <Link href="/">
                    <a>Back</a>
                </Link>
                <h3 className="font-bold mx-3 xl:text-center">Edit Project</h3>
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
                    className="px-4 py-2 rounded bg-red-600  font-roboto  text-white hover:bg-red-800 transition ease-in"
                >
                    {' '}
                    Create Project
                </button>
            </form>
        </main>
    );
};

export default ProjectForm;
