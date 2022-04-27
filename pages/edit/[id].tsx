import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from 'next';
import Head from 'next/head';
import ProjectForm from '@/components/Form/ProjectForm';

import { Project } from 'types';

const Project: NextPage = ({
	project,
}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) => {
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
			<ProjectForm
				isEditAvailable={true}
				projectId={project.id}
			/>
		</>
	);
};

export default Project;

export const getServerSideProps: GetServerSideProps<
	any,
	any
> = async ({ params: { id } }) => {
	const API_URL = String(process.env.API_URL);
	const projects = await fetch(API_URL);
	const projectResponse = await projects.json();
	const project = projectResponse.find(
		(project: Project) => project.id === id
	);
	if (!project)
		return {
			redirect: { destination: '/error', permanent: false },
		};
	return {
		props: {
			project,
		},
	};
};
