import React from 'react';
import Head from 'next/head';
import ProjectForm from '@/components/Form/ProjectForm';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Project } from 'types';
interface IProject {
    project: Project;
}
const Project: React.FC<IProject> = ({ project }) => {
    return (
        <>
            <Head>
                <title>Challenge Esto Es | Editar Proyecto</title>
                <meta
                    name="Challenge Esto Es "
                    content="Formulario de edición de proyecto de la página Esto Es"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectForm isEditAvailable={true} projectId={project.id} />
        </>
    );
};

export default Project;

export const getStaticProps: GetStaticProps<any, any> = async ({
    params: { id },
}) => {
    const API_URL = String(process.env.API_URL);
    const projects = await fetch(API_URL);
    const projectResponse = await projects.json();
    const project = projectResponse.find(
        (project: Project) => project.id === id
    );
    return {
        props: {
            project,
        },
        revalidate: 1,
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    const API_URL = String(process.env.API_URL);
    const projects = await fetch(API_URL);
    const projectResponse = await projects.json();
    return {
        paths: projectResponse.map((project: Project) => ({
            params: { id: project.id },
        })),
        fallback: 'blocking',
    };
};
