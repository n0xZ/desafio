import type { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';

import HomeView from '@/components/Home/HomeView';
import { Project } from 'types';
import Header from '@/components/Header/Header';
interface IProjects {
    projects: Project[];
}
const Home: React.FC<IProjects> = ({ projects }) => {
    return (
        <div className="min-h-screen h-full w-full">
            <Head>
                <title>Challenge Esto Es | Home</title>
                <meta
                    name="Challenge Esto Es "
                    content="Pagina principal de Challenge Esto Es"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="mb-4">
                <div>
                    <HomeView projects={projects} />
                </div>
            </div>
        </div>
    );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
    const API_URL = String(process.env.API_URL);
    const projectsResponse = await fetch(API_URL);
    const projects = await projectsResponse.json();
    context.res.setHeader('Content-Type', 'application/json');
    context.res.setHeader('Access-Control-Allow-Origin', '*');

    return {
        props: {
            projects: projects,
        },
    };
};
