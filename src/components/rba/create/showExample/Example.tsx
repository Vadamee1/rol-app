import { SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Tab, Tabs } from "@nextui-org/react"
import { CustomAccordion } from "@/components/custom/CustomAccordion"

interface Props {
  sectionsWithAccordions: SectionWithAccordions[]
}

export const Example = ({sectionsWithAccordions}: Props) => {

  return (
    <>
      <Tabs aria-label="Tabs de ejemplo" variant="underlined" color="warning">
        {sectionsWithAccordions.map((section) => (
          <Tab key={section.id} title={section.name}>
            {section.accordionRBA.map((acc) => (
              <div key={acc.id}>
                <CustomAccordion title={acc.title} content={acc.description}/>
              </div>
            ))}
          </Tab>
        ))}
      </Tabs>
    </>
  )
}