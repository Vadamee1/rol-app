'use client'

import { Listbox, ListboxItem } from "@nextui-org/react"

interface Props {
  userId: string
}

export const Body = ({userId}: Props) => {

  return (
    <>
      <Listbox aria-label="Listbox redirect">
        <ListboxItem key="editRBa" color="danger" href="/rba/edit">Editar "Read before add"</ListboxItem>
        <ListboxItem key="characters" color="danger" href={`/characters/${userId}/create`}>Añadir fichas de personaje</ListboxItem>
      </Listbox>
    </>
  )
}