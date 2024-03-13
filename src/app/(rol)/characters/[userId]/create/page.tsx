import { getCharacters } from "@/actions/characters/get-characters";
import { auth } from "@/auth.config";
import { Characters } from "@/components/characters";
import { PATHLOGIN } from "@/constants/paths/auth";
import { PATHHOME } from "@/constants/paths/home";
import { redirect } from "next/navigation";

export default async function Page ({params}: {params:{userId: string}}) {

  const session = await auth()
  if (!session) redirect(PATHLOGIN)

  const userLogged = session?.user?.id
  const userPage = params.userId

  const isOwner = userLogged === userPage ? true : false

  if (!isOwner) redirect(PATHHOME)

  const characters = await getCharacters(userPage)

  return (
    <div className="w-full">
      <Characters userId={userPage} characters={characters} />      
    </div>
  )
}
