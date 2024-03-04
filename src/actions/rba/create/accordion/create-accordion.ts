'use server'

import prisma from "../../../../../prisma"
import { AccordionRBA } from "@/interfaces/rba/create/accordion"

export const createAccordion = async ({sectionRBAId, title, description}: AccordionRBA, userId?: string) => {
  try {
    await prisma.accordionRBA.create({
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
      }
    })

    return {
      text: "Acordeón creado correctamente.",
      severity: "success",
      data
    }

  } catch (error) {
    console.log(error)
    throw new Error("No se logró.");
  }
}