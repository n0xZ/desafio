import React, { useState } from 'react';

import Link from 'next/link';
import sweetalert from 'sweetalert2';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { GoKebabVertical } from 'react-icons/go';
import { Project } from 'types';
interface IProjectsList {
    projects: Project[];
}

const ProjectsList = ({ projects }: IProjectsList) => {
    const [toggleMenu, settoggleMenu] = useState(false);
    const [Projects, setProjects] = useState(projects);
    const [ItemsPerPage, setItemsPerPage] = useState(0);
    const [SelectedProject, setSelectedProject] = useState('');

    const SlicedProjects = () => {
        return Projects.slice(ItemsPerPage, ItemsPerPage + 5);
    };
    const DeleteProject = (id: string) => {
        const API_URL = String(process.env.API_URL);
        sweetalert
            .fire({
                title: 'Desea borrar el projecto?',
                showDenyButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Si',
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    const deleteResponse = await fetch(`${API_URL}/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    }).then((res) => res.json());
                    const projectsFiltered = Projects.filter(
                        (project) => project.id !== id
                    );
                    setProjects(projectsFiltered);
                    sweetalert.fire(deleteResponse.message);
                }
            });
    };
    const ToggleMenu = (name: string) => {
        setSelectedProject(name);
        settoggleMenu((prev) => (prev = !prev));
    };
    const NextPage = () => {
        if (ItemsPerPage < Projects.length) setItemsPerPage((prev) => prev + 5);
    };
    const PreviousPage = () => {
        if (ItemsPerPage > 0) setItemsPerPage((prev) => prev - 5);
    };

    return (
        <div className="flex flex-col justify-between min-h-screen w-full">
            {SlicedProjects().map((project) => (
                <div
                    key={project.id}
                    className="flex flex-row justify-between items-center  max-h-2/6 w-full p-3 bg-white border-gray-400 border-b-2  "
                >
                    <aside className="h-full w-full flex-col justify-start items-start ">
                        <h3 className="font-roboto font-bold">
                            {project.name}
                        </h3>
                        <p className="text-gray-500 text-xs font-roboto mx-1 mb-2">
                            Created at {project.createdAt}
                        </p>
                        <h2 className="font-roboto font-bold mx-6 h-full">
                            {project.projectManager}
                        </h2>
                    </aside>
                    <div className="flex flex-row mx-3 justify-end h-full w-full items-center">
                        <div
                            key={project.projectManager}
                            className={
                                toggleMenu && SelectedProject === project.id
                                    ? ' h-full xl:w-4/12 mx-4 w-2/4 rounded-md shadow-md flex flex-col justify-center items-center  bg-gray-50'
                                    : ' hidden '
                            }
                        >
                            <div className="text-left  w-full flex flex-row  justify-start items-center">
                                <button
                                    onClick={() => DeleteProject(project.id)}
                                    className="text-left  border-b-2 border-gray-200 w-full flex flex-row justify-start items-center"
                                >
                                    <RiDeleteBin7Line className="xl:h-6 xl:w-6  w-16" />{' '}
                                    <p className="mx-2">Eliminar</p>
                                </button>
                            </div>
                            <div className="text-left  w-full flex flex-row ml-2 justify-start items-center">
                                <Link href={`/edit/${project.id}`}>
                                    <a className="flex flex-row justify-start items-center">
                                        <FiEdit className="xl:h-5 xl:w-5 h-4 w-4" />{' '}
                                        <p className="mx-2">Editar</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <GoKebabVertical
                            className="h-2/5"
                            onClick={() => ToggleMenu(project.id)}
                        />
                    </div>
                </div>
            ))}
            <div className="flex flex-col bg-red justify-center items-center w-full h-full mt-5">
                <div className="flex flex-row items-center ">
                    <button className="px-3 py-2 mx-6 rounded bg-red-600  font-roboto  text-white hover:bg-red-800 transition ease-in " onClick={PreviousPage}>
                        Previous
                    </button>

                    <button className="px-6 py-2 mx-2 rounded bg-blue-600  font-roboto  text-white hover:bg-blue-800 transition ease-in " onClick={NextPage}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;
