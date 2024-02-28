'use client'

import { DropdownItemType } from "@/interfaces/custom/dropdownItem"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  trigger: ReactNode | string
  items: DropdownItemType[]
}

export const CustomDropdown = ({trigger, items}: Props) => {

  return (
    <Dropdown>
      <DropdownTrigger>
        {trigger}
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown">
        {
          items.map((item) => (
            <DropdownItem key={item.key} className={item.classname} onClick={item.onClick} href={item.href}>{item.content}</DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  )
}