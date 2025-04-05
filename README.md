# 🚗 Taller Gaitán - Sistema de Gestión de Taller Mecánico

Aplicación web desarrollada con **Next.js**, **Prisma** y **PostgreSQL** para gestionar clientes, vehículos, diagnósticos y presupuestos en un taller automotriz.

---

## 📦 Tecnologías utilizadas

- ⚡️ Next.js
- 🧠 Prisma ORM
- 🐘 PostgreSQL (Railway)
- 🎨 Tailwind CSS
- 📦 pnpm

---

## 🛠️ Funcionalidades principales

- **Clientes**: Registro con nombre, teléfono, correo y cédula.
- **Vehículos**: Relación con cliente, datos como marca, modelo, placa, año, color.
- **Diagnósticos**: Descripción del problema y tipo de servicio (mecánica general, mantenimiento, eléctrico, etc.).
- **Presupuestos**: Costo aproximado, tiempo estimado y estado (pendiente, aprobado o rechazado).

---

## 🚀 ¿Cómo empezar?

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/taller-gaitan.git
cd taller-gaitan
2. Instala dependencias
pnpm install
# o npm install / yarn install
3. Configura las variables de entorno
Crea un archivo .env en la raíz con el siguiente contenido:

DATABASE_URL=postgresql://USUARIO:CONTRASEÑA@HOST:PUERTO/NOMBRE_DB
4. Ejecuta las migraciones de Prisma
npx prisma migrate dev
5. Levanta el servidor de desarrollo
pnpm dev
# o npm run dev / yarn dev
Abre tu navegador en 👉 http://localhost:3000

🧬 Estructura del proyecto

📁 prisma          → esquema de base de datos y migraciones
📁 pages/api       → endpoints API (clientes, vehículos, etc.)
📁 lib/prisma.ts   → cliente de Prisma
📁 app/            → interfaz web y componentes
🧪 Pruebas de API (Postman)

Puedes usar herramientas como Postman o Insomnia para probar los endpoints REST disponibles:

POST /api/clientes
POST /api/vehiculos
POST /api/diagnosticos
POST /api/presupuestos
GET /api/vehiculos, GET /api/clientes, etc.
🛫 Despliegue

Puedes desplegar el proyecto fácilmente en Vercel o cualquier plataforma que soporte Next.js.

📚 Recursos adicionales

📘 Documentación de Next.js
🔧 Prisma ORM
💅 Tailwind CSS
📡 Railway (DB)


✨ Autor
---
Desarrollado con 💻 por Andrea Flores como proyecto de titulación.
Contacto: marjories2001andrea04@gmail.com
---
