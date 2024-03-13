import { Character } from "@/interfaces/characters/characters"
import { Card, CardFooter } from "@nextui-org/react"
import { CustomImage } from "@/components/custom/CustomImage"
import Link from "next/link"

interface Props {
  character: Character
  userId: string
}

export const SingleCharacterCard = ({character, userId}: Props) => {

  return (
    <Card
      className="border-none"
      isPressable
      as={Link}
      href={`/characters/${userId}/${character.id}`}
    >
      <CustomImage
        alt="Imagen de la ficha"
        src="/images/profile/NotImage.jpg"
        height={200}
        width={200}
        priority
        className="object-cover"
      />
      <CardFooter className="justify-center before:bg-white/70 border-white/20 border-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10">
        <div>
          <p>{character.name}</p>
          <p className="flex justify-center">{character.nickname ? character.nickname : '-'}</p>
        </div>
      </CardFooter>
    </Card>
  )
}