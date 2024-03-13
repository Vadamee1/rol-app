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

export const getOneCharacter = async (id: string) =>  {
  try {

    const data = await prisma.character.findFirst({
      where: { id: Number(id) },
      select: {
        id: true,
        name: true,
        nickname: true,
        age: true,
        race: true,
        occupation: true,
        fandom: true,
        description: true,
        image: true
      },
    })

    return data

  } catch (error) {
    throw new Error("No se logró.");
  }
}