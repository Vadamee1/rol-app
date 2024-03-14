import { getOneCharacter } from "@/actions/characters/get-characters"
import { EditCharacterPage } from "@/components/characters/edit"

export default async function Page ({params}: {params:{userId: string, id: string}}) {

  const character = await getOneCharacter(params.id)
  const userPage = params.userId

  return (
    <div className="w-full">
      <EditCharacterPage userId={userPage} characterId={character}/>
    </div>
  )
}