import { SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Example } from "./Example"
import { RBATable } from "./RBATable"

interface Props {
  sectionsWithAccordions: SectionWithAccordions[]
  isEditable: boolean
}

export const BodyExampleEdit = ({sectionsWithAccordions, isEditable}: Props) => {

  return (
    <>
      {
        isEditable ? (
          <RBATable sectionsWithAccordions={sectionsWithAccordions} />
        ) : (
          <Example sectionsWithAccordions={sectionsWithAccordions} />
        )
      }
    </>
  )
}