import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const jun = await prisma.user.upsert({
    where: { username: 'jun' },
    update: {},
    create: {
      username: 'jun',
      nottodos: {
        createMany: {
          data: [
            {
              title: 'Check out Prisma with Nest.js',
              goal: 'Nest.js 공부',
              startDate: new Date("2023/01/26"),
              endDate: new Date("2023/05/19")
            },
            {
              title: 'Typescript Documents',
              goal: 'Typescript 공부',
              startDate: new Date("2023/01/26"),
              endDate: new Date("2023/05/10")
            }
          ]
        }
      }
    }
  })

  const moderation = await prisma.moderations.createMany({
    data: [
      {
        content: 'Nest.js 책 읽기1',
        success: true,
        userId: jun.id,
        nottodoId: 1,
        date: new Date()
      },
      {
        content: 'Nest.js 책 읽기2',
        success: false,
        userId: jun.id,
        nottodoId: 1,
        date: new Date()
      },
      {
        content: 'Typescript 책 읽기1',
        success: true,
        userId: jun.id,
        nottodoId: 2,
        date: new Date()
      },
      {
        content: 'Typescript 책 읽기2',
        success: false,
        userId: jun.id,
        nottodoId: 2,
        date: new Date()
      }
    ]
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