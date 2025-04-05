-- AlterTable
ALTER TABLE "Diagnostico" ADD COLUMN     "tipoServicio" TEXT NOT NULL DEFAULT 'Mantenimiento general';

-- AlterTable
ALTER TABLE "Presupuesto" ADD COLUMN     "descripcion" TEXT NOT NULL DEFAULT 'Presupuesto general',
ADD COLUMN     "piezasAReemplazar" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "tiempoEstimado" INTEGER NOT NULL DEFAULT 1;
