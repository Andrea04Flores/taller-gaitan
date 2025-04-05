import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { marca, modelo, placa, clienteId, color, año } = req.body;

    // Validar los campos
    if (!marca || !modelo || !placa || !color || !año || !clienteId) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
      // Crear un nuevo vehículo con relación al cliente
      const vehiculo = await prisma.vehiculo.create({
        data: {
          marca,
          modelo,
          placa,
          color,
          año,
          clienteId, // Relación con el cliente
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
          cliente: true, // Incluir la información del cliente relacionado
          diagnosticos: true, // Incluir los diagnósticos del vehículo
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
