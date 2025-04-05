// /pages/api/vehiculos.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { marca, modelo, placa, clienteId, color, año } = req.body;

    if (!marca || !modelo || !placa || !color || !año || !clienteId) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
      const vehiculo = await prisma.vehiculo.create({
        data: {
          marca,
          modelo,
          placa,
          color,
          año,
          clienteId,
        },
      });

      return res.status(201).json(vehiculo);
    } catch (error) {
      console.error('Error al crear vehículo:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else if (req.method === 'GET') {
    try {
      const vehiculos = await prisma.vehiculo.findMany({
        include: {
          cliente: true,
          diagnosticos: {
            include: {
              presupuesto: true,
            },
          },
        },
      });
      return res.status(200).json(vehiculos);
    } catch (error) {
      console.error('Error al obtener vehículos:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
