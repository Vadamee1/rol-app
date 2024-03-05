import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip } from "@nextui-org/react"
import { IoEllipsisVerticalOutline } from "react-icons/io5"

export const OptionsAccordion = () => {

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
          <DropdownItem key='edit'>Editar accordeones</DropdownItem>
          <DropdownItem key='delete'>Eliminar todos los accordeones</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}