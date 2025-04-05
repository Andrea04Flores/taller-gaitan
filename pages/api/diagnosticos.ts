import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { descripcion, tipoServicio, vehiculoId } = req.body;

    // Validar los campos
    if (!descripcion || !tipoServicio || !vehiculoId) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
      const diagnostico = await prisma.diagnostico.create({
        data: {
          descripcion,
          tipoServicio, 
          vehiculoId, 
        },
      });

      return res.status(201).json(diagnostico);
    } catch (error) {
      console.error('Error al crear diagnóstico:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else if (req.method === 'GET') {
    try {
      const diagnosticos = await prisma.diagnostico.findMany();
      return res.status(200).json(diagnosticos);
    } catch (error) {
      console.error('Error al obtener diagnósticos:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
