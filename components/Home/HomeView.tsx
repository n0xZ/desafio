import React from 'react';
import Link from 'next/link';
import projects from 'project.json';
import ProjectsList from '../Projects/ProjectsList';

const HomeView = () => {
    return (
        <div className="flex flex-col  xl:items-center  items-start w-full ">
            <div className="flex flex-col justify-start items-center xl:h-96 h-full w-full container mx-auto">
                <div className="flex flex-row justify-between h-16 items-center w-full bg-white border-gray-300 border-b-2 ">
                    <h1 className="font-roboto font-extrabold px-4 py-2">My Projects</h1>
                    <Link href="/projects">
                        <a className="px-3 py-2 m-2 rounded bg-red-600  font-roboto  text-white hover:bg-red-800 transition ease-in ">
                            + Add project
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-start my-3 h-full w-full">
                    <ProjectsList projects={projects} />
                    
                </div>
            </div>
        </div>
    );
};

export default HomeView;
