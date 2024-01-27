import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const jun = await prisma.user.upsert({
    where: { username: 'jun' },
    update: {},
    create: {
      username: 'jun',
      nottodos: {
        create: {
          title: 'Check out Prisma with Nest.js',
          goal: 'Nest.js 공부',
          startDate: new Date("2023/01/26"),
          endDate: new Date("2023/05/19")
        }
      }
    }
  })

  const nottodo = await prisma.nottodo.findFirst({
    where: {
      userId: jun.id
    }
  })

  const moderation = await prisma.moderations.create({
    data: {
      content: 'Nest.js 책 읽기',
      success: true,
      userId: jun.id,
      nottodoId: nottodo.id
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })