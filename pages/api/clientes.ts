// /pages/api/clientes/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const cliente = await prisma.cliente.findUnique({
        where: { id: Number(id) },
        include: {
          vehiculos: {
            include: {
              diagnosticos: {
                include: {
                  presupuesto: true,
                },
              },
            },
          },
        },
      });

      if (!cliente) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
      }

      return res.status(200).json(cliente);
    } catch (error) {
      console.error('Error al obtener cliente:', error);
      return res.status(500).json({ error: 'Error del servidor' });
    }
  }

  res.status(405).json({ error: 'Método no permitido' });
}
