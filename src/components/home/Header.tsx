import { CREATERBA } from "@/constants/paths/rba"
import Link from "next/link"
import { Link as LinkUi} from "@nextui-org/react"
import { auth } from "@/auth.config"
import { PATHLOGIN } from "@/constants/paths/auth"

export const Header = async () => {

  const session = await auth()

  return (
    <div className="flex gap-1 ml-3 mr-4">
      <p>¿Todavía no tienes tu presentación?</p>
      <LinkUi href={session ? CREATERBA : PATHLOGIN} color="warning" as={Link}> ¡Crea una!</LinkUi>
    </div>
  )
}