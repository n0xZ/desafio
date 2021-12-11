import React from 'react';
import prisma from '@/prisma/seed';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function getProjects(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') return res.status(405).end();
    const projectsResponse = await prisma.project.findMany();

    return res.status(200).json(projectsResponse);
}
