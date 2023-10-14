import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === "POST") {
    const data = req.body;

    await prisma.todo.create({
      data
    });

    res.status(200).json({message:"ok"});
  }
}
