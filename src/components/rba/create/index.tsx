'use client'

import { CustomCard } from "@/components/custom/CustomCard"
import { FormSectionCard } from "./section/FormSectionCard"
import { HeaderAccordionCard } from "./accordion/HeaderAccordionCard"
import { FormAccordionCard } from "./accordion/FormAccordionCard"
import { useState } from "react"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { HeaderShowExample } from "./showExample/HeaderShowExample"
import { BodyExampleEdit } from "./showExample/BodyExampleEdit"

interface Props {
  userId?: string
  sectionOptions: SectionOptions[]
  sectionsWithAccordions: SectionWithAccordions[]
}

export const CreateRulesPage = ({ userId, sectionOptions, sectionsWithAccordions }: Props) => {

  const [sections, setSections] = useState(sectionOptions)
  const [exampleAccordions, setSectionsWithAccordions] = useState(sectionsWithAccordions)
  const [isEditable, setIsEditable] = useState(false)

  return (
    <>
      <div className="grid md:flex gap-5 w-full">
        <div className="flex flex-col gap-3 basis-2/5">
          <CustomCard 
            header={<p>Comienza creando las secciones en las que se dividirá:</p>} 
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
          exampleAccordions.length ? (
            
            <div className="w-full basis-3/5">
              <CustomCard
                header={<HeaderShowExample isEditable={isEditable} setIsEditable={setIsEditable}/>} 
                body={
                  <BodyExampleEdit
                    sectionsWithAccordions={exampleAccordions}
                    isEditable={isEditable} 
                    userId={userId}
                    setSections={setSections}
                    setSectionsWithAccordions={setSectionsWithAccordions}
                    sections={exampleAccordions}
                  />
                } 
              />
            </div>
          ) : ""
        }
      </div>
    </>
  )
}