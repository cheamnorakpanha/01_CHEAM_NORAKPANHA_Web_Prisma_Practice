const { PrismaClient } = require("@/generated/prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

// adapter
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

// client
const prisma = new PrismaClient({ adapter });
export default prisma;