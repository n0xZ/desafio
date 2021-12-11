import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/seed';
export default async function handleProject(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'PUT' && req.method !== 'DELETE')
        return res.status(405).end();
    if (req.method === 'DELETE') {
        const id = !Array.isArray(req.query.id) ? req.query.id : '';
        const deleteResponse = await prisma.project.delete({
            where: { id: id },
        });
        res.status(200).json({
            message: 'Project removed successfully',
            response: deleteResponse,
        });
    }
    if (req.method === 'PUT') {
        const { name, description, projectManager, assignedTo, status } =
            req.body;
        const id = !Array.isArray(req.query.id) ? req.query.id : '';
        const updateResponse = await prisma.project.update({
            data: { name, description, projectManager, assignedTo, status },
            where: { id: id },
        });
        res.status(200).json({
            message: 'Project updated successfully',
            response: updateResponse,
        });
    }
}
