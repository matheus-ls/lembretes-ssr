import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      
      const todoId = parseInt(id as string, 10);
  
      if (isNaN(todoId)) {
        return res.status(400).json({ message: 'ID inválido' });
      }
      await prisma.todo.delete({ where: { id: todoId } });

      res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
