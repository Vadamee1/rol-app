'use cliet'

import { Button } from "@nextui-org/react"
import Link from "next/link"
import { IoCreateOutline } from "react-icons/io5"
import { DeleteButton } from "./DeleteButton"

interface Props {
  userId: string
  characterId: number | undefined
}

export const FooterButton = ({userId, characterId}: Props) => {

  return (
    <div className="flex w-full justify-center gap-2">
      <Button
        color="warning"
        variant="ghost"
        as={Link}
        href={`/characters/${userId}/${characterId}/edit`}
      >
        <IoCreateOutline/> Editar
      </Button>
      <DeleteButton userId={userId} characterId={characterId} />
    </div>
  )
}