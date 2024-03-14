'use server'

import { CreateCharacter } from "@/interfaces/characters/characters"
import prisma from "../../../prisma"

export const updateCharacter = async ({
  id,
  name,
  nickname,
  age,
  occupation,
  race,
  fandom,
  description,
  userId
}: CreateCharacter) => {
  console.log(  id,
    name,
    nickname,
    age,
    occupation,
    race,
    fandom,
    description,
    userId)

  try {

    await prisma.character.update({
      where:  {id},
      data: {
        name,
        nickname,
        age,
        occupation,
        race,
        fandom,
        description,
      }
    })

    return {
      text: "Ficha actualizada correctamente.",
      severity: "success"
    }

  } catch (error) {
    console.log(error)
    throw new Error("No se logró.");
  }
}