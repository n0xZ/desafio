import prisma from '@/prisma/seed';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handleProjects(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET' && req.method !== 'POST')
        return res.status(405).end();
    if (req.method === 'GET') {
        const projectsResponse = await prisma.project.findMany();

        return res.status(200).json(projectsResponse);
    } else {
        try {
            const { name, description, projectManager, assignedTo, status } =
                req.body;
            if (req.body === {})
                return res
                    .status(500)
                    .json({ message: 'Campos no introducidos' });
            const addProjectResponse = await prisma.project.create({
                data: {
                    name,
                    description,
                    projectManager,
                    assignedTo,
                    status,
                },
            });

            return res.status(200).json({
                message: 'Project created successfully',
                response: addProjectResponse,
            });
        } catch (err) {
            res.status(500).json({
                message: 'Wrong project values',
            });
        }
    }
}
