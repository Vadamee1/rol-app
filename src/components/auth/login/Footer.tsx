import Link from "next/link"
import { textCards } from "@/config/fonts"
import { PATHNEWUSER } from "@/constants/paths/auth"
import { Link as LinkUi} from "@nextui-org/react"

export const Footer = () => {

  return (
    <>
    <div className="flex justify-start gap-1">
      <p className={`${textCards.className} text-tiny`}>
        ¿No tienes cuenta? 
      </p>
      <LinkUi href={PATHNEWUSER} as={Link}>
        <p className={`${textCards.className} text-tiny`}>
          Registrate aquí.
        </p>
      </LinkUi>
    </div>
  </>
  )
}