import { PrismaClient } from '@prisma/client';

export const postgres = new PrismaClient();

console.log(postgres);

export default postgres;
