// /pages/api/clientes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, telefono, email, cedula } = req.body;

    // Validar los campos
    if (!nombre || !telefono || !email || !cedula) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
      // Crear un nuevo cliente
      const cliente = await prisma.cliente.create({
        data: {
          nombre,
          telefono,
          email,
          cedula,
        },
      });

      return res.status(201).json(cliente);
    } catch (error) {
      console.error('Error al crear cliente:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
