'use server'

import prisma from "../../../../../prisma"

export const getSections = async (userId?: string) => {
  try {

    const data = await prisma.sectionRBA.findMany({
      where: { userId },
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
      }
    })

    return data

  } catch (error) {
    throw new Error("No se logró.");
  }
}