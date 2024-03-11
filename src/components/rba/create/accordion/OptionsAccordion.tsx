import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, useDisclosure } from "@nextui-org/react"
import { IoEllipsisVerticalOutline } from "react-icons/io5"
import { CustomModal } from "@/components/custom/CustomModal"
import { BodyEditModal } from "./BodyEditModal"
import { SectionOptions, SectionRBA, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Dispatch, SetStateAction } from "react"

interface Props {
  sections: SectionOptions[]
  section: SectionRBA
  userId: string | undefined
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const OptionsAccordion = ({section, sections, userId, setSectionsWithAccordions}: Props) => {
  
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure()

  return (
    <>
      <Dropdown>
        <Tooltip content='Opciones'>
          <DropdownTrigger>
            <Button isIconOnly variant="light" color="secondary">
              <IoEllipsisVerticalOutline/>
            </Button>
          </DropdownTrigger>
        </Tooltip>
        <DropdownMenu aria-label="Accordion actions">
          <DropdownItem key='edit' onClick={onOpen}>Editar accordeones</DropdownItem>
          <DropdownItem key='delete'>Eliminar todos los accordeones</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header={<p>Editar acordeones:</p>}
        size="4xl"
        body={
          <BodyEditModal
            setSectionsWithAccordions={setSectionsWithAccordions}
            userId={userId}
            sections={sections}
            accordions={section.accordionRBA}
            sectionId={section.id}
          />
        }
        footer={
          <Button variant="flat" color="primary" onPress={onClose}>Aceptar</Button>
        }
      />
    </>
  )
}