import { getOneCharacter } from "@/actions/characters/get-characters"
import { auth } from "@/auth.config"
import { DetailCharacter } from "@/components/characters/detail"

export default async function Page ({params}: {params:{userId: string, id: string}}) {

  const session = await auth()

  const userLogged = session?.user?.id
  const userPage = params.userId

  const isOwner = userLogged === userPage ? true : false

  const character = await getOneCharacter(params.id)

  return (
    <div className="w-full">
      <DetailCharacter character={character} isOwner={isOwner}/>
    </div>
  )
}