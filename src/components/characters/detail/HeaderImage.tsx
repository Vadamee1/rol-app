import { CustomImage } from "@/components/custom/CustomImage"
import { Character } from "@/interfaces/characters/characters"
import { Divider } from "@nextui-org/react"

interface Props {
  character: Character | null
}

export const HeaderImage = ({character}: Props) => {

  return (
    <div className="grid gap-4 w-full">
      <p className="flex justify-center">{character?.name}</p>
      <div className="grid justify-center w-full">
        <CustomImage
          alt="Character photo"
          src={character?.image ? character.image : "/images/profile/NotImage.jpg"} 
          height={200}
          width={200}
          priority
        />
        <Divider className="mt-4 w-full"/>
      </div>
    </div>
  )
}