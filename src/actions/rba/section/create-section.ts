'use server'

import { SectionRBA } from "@/interfaces/rba/create/section"
import prisma from "../../../../prisma"

export const createSection = async ({userId, name}: SectionRBA) => {
  try {

    await prisma.sectionRBA.create({
      data: {
        name,
        userId
      }
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
      text: "Sección creada correctamente.",
      severity: "success",
      data
    }

  } catch (error) {
    throw new Error("No se logró.");
  }
}