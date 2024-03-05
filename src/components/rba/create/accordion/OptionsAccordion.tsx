import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, useDisclosure } from "@nextui-org/react"
import { IoEllipsisVerticalOutline } from "react-icons/io5"
import { CustomModal } from "@/components/custom/CustomModal"
import { BodyEditModal } from "./BodyEditModal"
import { getAccordions } from "@/actions/rba/accordion/get-accordions"

interface Props {
  sectionId: number | undefined
}

export const OptionsAccordion = async ({sectionId}: Props) => {
  
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure()
  const accordions = await getAccordions(sectionId)

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
        body={
          <BodyEditModal
            accordions={accordions}
          />
        }
      />
    </>
  )
}