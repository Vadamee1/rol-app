import { AccordionRBA } from "@/interfaces/rba/create/accordion"

interface Props {
  accordions: AccordionRBA[] | undefined
}

export const BodyEditModal = ({accordions}: Props) => {


  return (
    <div>
      {
        accordions ? (
          accordions.map((acc) => (
            <p>{acc.title}</p>
          ))
        ) : ''
      }
    </div>
  )
}