'use server'

import { AccordionRBA } from "@/interfaces/rba/create/accordion"
import prisma from "../../../../prisma"

export const updateAccordion = async ({id, sectionRBAId, title, description}: AccordionRBA, userId?: string) => {
  try {
    await prisma.accordionRBA.update({
      where: { id },
      data: {
        sectionRBAId: Number(sectionRBAId),
        title,
        description
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
      text: "Acordeón actualizado correctamente.",
      severity: "success",
      data
    }

  } catch (error) {
    console.log(error)
    throw new Error("No se logró.");
  }
}