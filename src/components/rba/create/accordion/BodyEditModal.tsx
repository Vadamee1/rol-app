'use client'

import { AccordionRBA } from "@/interfaces/rba/create/accordion"
import { EditFormModal } from "./EditFormModal"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Dispatch, SetStateAction } from "react"

interface Props {
  sections: SectionOptions[]
  accordions: AccordionRBA[] | undefined
  sectionId: number | undefined
  userId: string | undefined
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const BodyEditModal = ({accordions, sections, sectionId, userId, setSectionsWithAccordions}: Props) => {


  return (
    <div className="lg:grid grid-cols-3 gap-3">
      {
        accordions ? (
          accordions.map((acc) => (
            <div key={acc.id}>
              <EditFormModal accordion={acc} sections={sections} sectionId={sectionId} userId={userId} setSectionsWithAccordions={setSectionsWithAccordions}/>
            </div>
          ))
        ) : ''
      }
    </div>
  )
}