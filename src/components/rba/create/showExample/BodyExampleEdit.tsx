import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Example } from "./Example"
import { RBATable } from "./RBATable"
import { Dispatch, SetStateAction } from "react"

interface Props {
  sections: SectionWithAccordions[]
  sectionsWithAccordions: SectionWithAccordions[]
  isEditable: boolean
  userId: string | undefined
  setSections: Dispatch<SetStateAction<SectionOptions[]>>
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const BodyExampleEdit = ({sectionsWithAccordions, isEditable, userId, setSections, setSectionsWithAccordions, sections}: Props) => {

  return (
    <>
      {
        isEditable ? (
          <RBATable 
            sections={sections}
            sectionsWithAccordions={sectionsWithAccordions}
            userId={userId}
            setSections={setSections}
            setSectionsWithAccordions={setSectionsWithAccordions} 
          />
        ) : (
          <Example sectionsWithAccordions={sectionsWithAccordions} />
        )
      }
    </>
  )
}