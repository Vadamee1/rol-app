'use client'

import { CustomCard } from "@/components/custom/CustomCard"
import { HeaderSectionCard } from "./section/HeaderSectionCard"
import { FormSectionCard } from "./section/FormSectionCard"
import { HeaderAccordionCard } from "./accordion/HeaderAccordionCard"
import { FormAccordionCard } from "./accordion/FormAccordionCard"
import { useState } from "react"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { HeaderShowExample } from "./showExample/HeaderShowExample"
import { Example } from "./showExample/Example"

interface Props {
  userId?: string
  sectionOptions: SectionOptions[]
  sectionsWithAccordions: SectionWithAccordions[]
}

export const CreateRulesPage = ({ userId, sectionOptions, sectionsWithAccordions }: Props) => {

  const [sections, setSections] = useState(sectionOptions)
  const [exampleAccordions, setSectionsWithAccordions] = useState(sectionsWithAccordions)

  return (
    <>
      <div className="flex gap-5 w-full">
        <div className="flex flex-col gap-3">
          <CustomCard 
            header={<HeaderSectionCard/>} 
            body={
              <FormSectionCard 
                userId={userId} 
                setSections={setSections} 
                setSectionsWithAccordions={setSectionsWithAccordions} 
              />
            }
          />
          <CustomCard 
            header={<HeaderAccordionCard/>} 
            body={
              <FormAccordionCard 
                sections={sections} 
                userId={userId}
                setSectionsWithAccordions={setSectionsWithAccordions}
              />
            }
          />
        </div>
        {
          sectionsWithAccordions.length ? (
            <div className="w-full">
              <CustomCard
                header={<HeaderShowExample/>} 
                body={<Example sectionsWithAccordions={exampleAccordions}/>
                } 
              />
            </div>
          ) : ""
        }
      </div>
    </>
  )
}