import Link from "next/link"
import { textCards } from "@/config/fonts"
import { PATHLOGIN } from "@/constants/paths/auth"

export const Footer = () => {

  return (
    <>
      <Link href={PATHLOGIN}>
        <p className={`${textCards.className} text-tiny`}>
          ¿Ya tienes cuenta? Inicia sesión.
        </p>
      </Link>
    </>
  )
}