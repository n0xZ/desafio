import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import HomeView from '@/components/Home/HomeView';
import { Project } from 'types';
interface IProjects {
    projects: Project[];
}
const Home: React.FC<IProjects> = ({ projects }) => {
    return (
        <div className="flex flex-row justify-center xl:items-center items-start  container mx-auto min-h-screen h-full w-full">
            <Head>
                <title>Challenge Esto Es | Home</title>
                <meta
                    name="Challenge Esto Es "
                    content="Pagina principal de Challenge Esto Es"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeView projects={projects} />
        </div>
    );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
    const projectsResponse = await fetch(
        'https://challengeestoes.vercel.app/api/projects'
    );
    const projects = await projectsResponse.json();
    return {
        props: {
            projects: projects,
        },
        revalidate: 15,
    };
};
