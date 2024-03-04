import { Accordion, AccordionItem } from "@nextui-org/react"

interface Props {
  title: string
  content: string
}

export const CustomAccordion = ({title, content}: Props) => {

  return (
    <Accordion variant="bordered">
      <AccordionItem title={title}>
        {content}
      </AccordionItem>
    </Accordion>
  )
}