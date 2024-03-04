'use server'

import { INTERNAL_SERVER_ERROR } from "@/constants/messages/error/responses"
import prisma from "../../../../../prisma"
import { SectionRBA } from "@/interfaces/rba/create/section"

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
      }
    })

    return {
      text: "Seccón creada correctamente.",
      severity: "success",
      data
    }

  } catch (error) {
    throw new Error("No se logró.");
  }
}