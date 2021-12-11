import React from 'react';
import prisma from '@/prisma/seed';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function getProjects(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET' && req.method !== 'POST')
        return res.status(405).end();
    if (req.method === 'GET') {
        const projectsResponse = await prisma.project.findMany();

        return res.status(200).json(projectsResponse);
    } else {
       console.log(req.headers)
        const projectsResponse = await prisma.project.create({
            data: req.body,
        });
        return res.status(200).json(projectsResponse);
    }
}
