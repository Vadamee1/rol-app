import { Button } from "@nextui-org/react"
import Link from "next/link"
import { IoCreateOutline } from "react-icons/io5"

interface Props {
  userId: string
  characterId: number | undefined
}

export const FooterButton = ({userId, characterId}: Props) => {

  return (
    <div className="flex w-full justify-center">
      <Button
        color="warning"
        variant="ghost"
        as={Link}
        href={`/characters/${userId}/${characterId}/edit`}
      >
        <IoCreateOutline/> Editar
      </Button>
    </div>
  )
}