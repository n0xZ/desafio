import React, { useState } from 'react';
import Link from 'next/link';
import sweetalert from 'sweetalert2';
import { GoKebabVertical } from 'react-icons/go';
interface IProjectsList {
    projects: any[];
}
type Project = {
    id?: number;
    description: string;
    projectManager: string;
    assignedTo: string;
    status: string;
};
const ProjectsList = ({ projects }: IProjectsList) => {
    const [toggleMenu, settoggleMenu] = useState(false);
    const [Projects, setProjects] = useState(projects);
    const [SelectedProject, setSelectedProject] = useState('');
    const DeleteProject = (name: string) => {
        sweetalert
            .fire({
                title: 'Desea borrar el projecto?',
                showDenyButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Si',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    setProjects(
                        Projects.filter((project) => project.name !== name)
                    );
                    sweetalert.fire('Borrado con éxito');
                }
            });
    };
    const ToggleMenu = (name: string) => {
        setSelectedProject(name);
        settoggleMenu((prev) => (prev = !prev));
    };
    return (
        <>
            {Projects.map((project: any) => (
                <div
                    key={project.id}
                    className="flex flex-row justify-between items-center  h-2/6 w-full p-3 bg-white border-gray-400 border-b-2  "
                >
                    <aside className="h-full w-full flex-col justify-start items-start ">
                        <h3 className="font-roboto font-bold">
                            {project.name}
                        </h3>
                        <p className="text-gray-500 text-xs font-roboto mx-1 mb-2">
                            Created at {Date.now().toString()}
                        </p>
                        <h2 className="font-roboto font-bold mx-6 h-full">
                            {project.projectManager}
                        </h2>
                    </aside>
                    <div className="flex flex-row mx-3 justify-between items-center">
                        <div
                            key={project.projectManager}
                            className={
                                toggleMenu && SelectedProject === project.name
                                    ? 'h-24 w-full bg-gray-100'
                                    : '  h-1/2 w-1/2 hidden bg-gray-100 transition ease-in'
                            }
                        >
                            <button onClick={() => DeleteProject(project.name)}>
                                Eliminar
                            </button>
                            <Link href={`/edit/${project.name}`}>
                                <a>Editar </a>
                            </Link>
                        </div>
                        <GoKebabVertical
                            className="h-2/5"
                            onClick={() => ToggleMenu(project.name)}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectsList;
