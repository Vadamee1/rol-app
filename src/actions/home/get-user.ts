'use server'

import prisma from "../../../prisma"

export const getUser = async (id: string) => {
  try {
    
    const user = prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        secondName: true,
        lastName: true,
        nickname: true,
        email: true,
        image: true
      }
    })

    return user

  } catch (error) {
    console.log(error)
    throw new Error('No se logró.')
  }
}