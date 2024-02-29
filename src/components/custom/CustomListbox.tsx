'use client'

import { ListboxItemType } from "@/interfaces/custom/listboxItem"
import { Listbox, ListboxItem } from "@nextui-org/react"
import Link from "next/link"

interface Props {
  items: ListboxItemType[]
}

export const CustomListbox = ({items}: Props) => {

  return (
    <Listbox variant="bordered" aria-label="Custom listbox">
      {
        items.map((item) => (
          <ListboxItem key={item.key} color={item.color} href={item.href} as={Link}>
            {item.content}
          </ListboxItem>
        ))
      }
    </Listbox>
  )
}