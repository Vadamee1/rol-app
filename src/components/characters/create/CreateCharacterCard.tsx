import { Dispatch, SetStateAction } from "react"
import { CustomCard } from "../../custom/CustomCard"
import { CreateForm } from "./CreateForm"
import { Character } from "@/interfaces/characters/characters"

interface Props {
  userId: string
  setCharacter: Dispatch<SetStateAction<Character[]>>
}

export const CreateCharacterCard = ({userId, setCharacter}: Props) => {

  return (
    <>
      <CustomCard
        header={<h1 className="text-xl ml-1">Añadir personajes</h1>}
        body={<CreateForm userId={userId} setCharacter={setCharacter} />} 
      />
    </>
  )
}