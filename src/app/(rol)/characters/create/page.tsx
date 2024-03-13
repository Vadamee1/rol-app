import { getCharacters } from "@/actions/characters/get-characters";
import { auth } from "@/auth.config";
import { Characters } from "@/components/characters";
import { PATHLOGIN } from "@/constants/paths/auth";
import { redirect } from "next/navigation";

export default async function Page () {

  const session = await auth()
  if (!session) redirect(PATHLOGIN)

  const userId = session.user?.id ? session.user?.id : ""

  const characters = await getCharacters(userId)

  return (
    <div className="w-full">
      <Characters userId={userId} characters={characters} />      
    </div>
  )
}
