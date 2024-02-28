import { CREATERBA } from "@/constants/paths/rba"
import Link from "next/link"
import { Button, Link as LinkUi} from "@nextui-org/react"

export const Header = () => {

  return (
    <div className="flex gap-1 ml-3 mr-4">
      <p>¿Todavía no tienes tu presentación?</p>
      <LinkUi href={CREATERBA} color="warning" as={Link}> ¡Crea una!</LinkUi>
    </div>
  )
}