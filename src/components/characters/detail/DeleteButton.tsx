'use client'

import { deleteCharacter } from "@/actions/characters/delete-character"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { IoCreateOutline } from "react-icons/io5"

interface Props {
  userId: string
  characterId: number | undefined
}

export const DeleteButton = ({userId, characterId}: Props) => {

  const handleDelete = async (id: number | undefined) => {
    await deleteCharacter(id)
  }

  return (
    <Button
      color="danger"
      variant="ghost"
      onClick={() => handleDelete(characterId)}
      as={Link}
      href={`/characters/${userId}/create`}
    >
      <IoCreateOutline/> Eliminar
    </Button>
  )
}