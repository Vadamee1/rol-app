'use server'

import { CreateCharacter } from "@/interfaces/characters/characters"
import prisma from "../../../prisma"

export const createCharacter = async ({
  name,
  nickname,
  age,
  occupation,
  race,
  fandom,
  description,
  userId
}: CreateCharacter) => {
  console.log(userId)
  try {

    await prisma.character.create({
      data: {
        name,
        nickname,
        age,
        occupation,
        race,
        fandom,
        description,
        userId
      }
    })

    const data = await prisma.character.findMany({
      where: {userId},
      select: {
        id: true,
        name: true,
        nickname: true
      }
    })

    return {
      text: "Ficha creada correctamente.",
      severity: "success",
      data
    }

  } catch (error) {
    console.log(error)
    throw new Error("No se logró.");
  }
}