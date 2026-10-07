// Configuración de Prisma (v7+): la conexión a la base vive acá, no en el schema.
// Uso: crear un archivo .env con DATABASE_URL="postgresql://usuario:clave@localhost:5432/contenic"
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "db/schema.prisma",
  migrations: { path: "db/migrations" },
  datasource: { url: env("DATABASE_URL") },
});
