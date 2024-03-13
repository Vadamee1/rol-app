'use server'

import prisma from "../../../prisma";

export const getCharacters = async (userId: string) => {
  try {

    const data = await prisma.character.findMany({
      where: { userId },
      select: {
        id: true,
        name: true,
        nickname: true
      },
      orderBy: {
        createdAt: "asc"
      }
    })

    return data

  } catch (error) {
    throw new Error("No se logró.");
  }
}