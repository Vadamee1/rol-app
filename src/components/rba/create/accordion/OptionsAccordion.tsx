import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, useDisclosure } from "@nextui-org/react"
import { IoEllipsisVerticalOutline } from "react-icons/io5"
import { EditModal } from "./EditModal"



export const OptionsAccordion = () => {

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
      <EditModal isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
  )
}