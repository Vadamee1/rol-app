'use server'

import prisma from "../../../../prisma";

export const getAccordions = async (sectionId: number | undefined) => {
  try {

    const data = await prisma.accordionRBA.findMany({
      where: { sectionRBAId: sectionId },
      select: {
        id: true,
        title: true,
        description: true
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