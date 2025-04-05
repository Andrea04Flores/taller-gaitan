import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { costoAproximado, estado, descripcion, diagnosticoId, tiempoEstimado } = req.body;

    if (!costoAproximado || !estado || !descripcion || !diagnosticoId || !tiempoEstimado) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
      const presupuesto = await prisma.presupuesto.create({
        data: {
          costoAproximado,
          estado,
          descripcion, 
          diagnosticoId,
          tiempoEstimado,
        },
      });

      return res.status(201).json(presupuesto);
    } catch (error) {
      console.error('Error al crear presupuesto:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else if (req.method === 'GET') {
    try {
      const presupuestos = await prisma.presupuesto.findMany();
      return res.status(200).json(presupuestos);
    } catch (error) {
      console.error('Error al obtener presupuestos:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
