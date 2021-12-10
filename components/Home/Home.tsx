import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from 'types';
const Home = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex flex-row justify-between items-center">
                    <h1>My Projects</h1>
                    <Link href="/projects">
                        <a>Add projects</a>
                    </Link>
                </div>
                <div>
                    {projects &&
                        projects.map((project) => (
                            <div
                                key={project.projectManager}
                                className="flex flex-row justify-between items-center"
                            >
                                <aside>
                                    <h3>{project.name}</h3>
                                    <p>Creation</p>
                                </aside>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
