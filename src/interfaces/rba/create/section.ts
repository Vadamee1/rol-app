import { AccordionRBA } from "./accordion"

export interface SectionRBA {
  id?: number
  name: string
  userId?: string
  accordionRBA?: AccordionRBA[]
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}

export interface SectionOptions {
  id: number
  name: string
}

export interface SectionWithAccordions {
  id: number
  name: string
}

interface AccordionsRBA {
  id: number
  title: string
  description: string
}