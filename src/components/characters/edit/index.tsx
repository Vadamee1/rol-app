import { CustomCard } from "@/components/custom/CustomCard"
import { Character } from "@/interfaces/characters/characters"
import { EditForm } from "./EditForm"

interface Props {
  userId: string
  characterId: Character | null
}

export const EditCharacterPage = ({userId, characterId}: Props) => {

  return (
    <div className="flex items-center justify-center h-full gap-4">
      <CustomCard 
        header={<h1>Editar personaje:</h1>}
        body={<EditForm character={characterId} userId={userId}/>}
      />
    </div>
  )
}