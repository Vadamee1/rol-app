import Link from "next/link"
import { textCards } from "@/config/fonts"
import { PATHLOGIN } from "@/constants/paths/auth"
import { Link as LinkUi} from "@nextui-org/react"

export const Footer = () => {

  return (
    <>
      <div className="flex justify-start gap-1">
          <p className={`${textCards.className} text-tiny`}>
            ¿Ya tienes cuenta? 
          </p>
        <LinkUi href={PATHLOGIN} as={Link}>
          <p className={`${textCards.className} text-tiny`}>
            Inicia sesión.
          </p>
        </LinkUi>
      </div>
    </>
  )
}