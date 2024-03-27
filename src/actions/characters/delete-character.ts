'use server'

import prisma from "../../../prisma"

export const deleteCharacter = async (id: number | undefined) => {
  try {

    await prisma.character.delete({
      where: {id}
    })

    return {
      text: "Sección eliminada correctamente.",
      severity: "success"
    }

  } catch (error) {
    throw new Error("No se logró.");
  }
}