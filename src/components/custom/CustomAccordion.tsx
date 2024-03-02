import { Accordion, AccordionItem } from "@nextui-org/react"

interface Props {
  key: number
  title: string
  content: string
}

export const CustomAccordion = ({key, title, content}: Props) => {

  return (
    <Accordion variant="bordered">
      <AccordionItem key={key} title={title}>
        {content}
      </AccordionItem>
    </Accordion>
  )
}