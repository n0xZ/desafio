import React from 'react';
import { useRouter } from 'next/router';
import prisma from '@/prisma/seed';
import ProjectForm from '@/components/Form/ProjectForm';

import { GetStaticPaths, GetStaticProps } from 'next';
import { Project } from 'types';
interface IProject {
    project: Project;
}
const Project: React.FC<IProject> = ({ project }) => {
    return <ProjectForm isEditAvailable={true} projectId={project.id} />;
};

export default Project;

export const getStaticProps: GetStaticProps<any, any> = async ({
    params: { id },
}) => {
    const projects = await fetch(
        'https://challengeestoes.vercel.app/api/projects'
    );
    const projectResponse = await projects.json();
    const project = projectResponse.find(
        (project: Project) => project.id === id
    );
    return {
        props: {
            project,
        },
        revalidate: 10,
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    const projects = await fetch(
        'https://challengeestoes.vercel.app/api/projects'
    );
    const projectResponse = await projects.json();
    return {
        paths: projectResponse.map((project: Project) => ({
            params: { id: project.id },
        })),
        fallback: 'blocking',
    };
};
