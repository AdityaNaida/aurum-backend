import { PrismaClient } from '@prisma/client';

export const postgres = new PrismaClient();
export default postgres;
