import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from 'types';
import projects from 'project.json';
const HomeView = () => {
    return (
        <div className="flex flex-col justify-center xl:items-center  items-start w-full ">
            <div className="flex flex-col justify-start items-center xl:h-96 h-full w-full container mx-auto">
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="font-roboto font-bold ">My Projects</h1>
                    <Link href="/projects">
                        <a className="px-6 py-3 rounded bg-red-600  font-roboto font-bold text-white hover:bg-red-800 transition ease-in ">
                            + Add project
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-start my-4 h-full w-full">
                    {projects.map((project) => (
                        <div
                            key={project.projectManager}
                            className="flex flex-row justify-between items-center h-1/4 w-full  bg-green-400 border-gray-600"
                        >
                            <aside className="h-full w-full border-b-2 flex-col justify-start items-start  ">
                                <h3>{project.name}</h3>
                            </aside>
                            <button>Editar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeView;
