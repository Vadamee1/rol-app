'use server'

import prisma from "../../../../prisma";

export const deleteSection = async (id: number | undefined, userId: string | undefined) => {
  try {

    await prisma.sectionRBA.delete({
      where: {id}
    })

    const data = await prisma.sectionRBA.findMany({
      where: {userId},
      select: {
        id: true,
        name: true,
        accordionRBA: {
          select: {
            id: true,
            title: true,
            description: true
          }
        }
      },
      orderBy: {
        createdAt: "asc"
      }
    })

    return {
      text: "Sección eliminada correctamente.",
      severity: "success",
      data
    }

  } catch (error) {
    throw new Error("No se logró.");
  }
}