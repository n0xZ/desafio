import React from 'react';
import Head from 'next/head';
import ProjectForm from '@/components/Form/ProjectForm';
const ProjectsFormView = () => {
    return (
        <>
            <Head>
                <title>Challenge Esto Es | Agregar Proyecto</title>
                <meta
                    name="Challenge Esto Es"
                    content="Formulario de creación de proyectos"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectForm isEditAvailable={false} projectId={undefined} />
        </>
    );
};

export default ProjectsFormView;
