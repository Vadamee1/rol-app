import Link from "next/link"
import { textCards } from "@/config/fonts"
import { PATHNEWUSER } from "@/constants/paths/auth"

export const Footer = () => {

  return (
    <>
      <Link href={PATHNEWUSER}>
        <p className={`${textCards.className} text-tiny`}>
          ¿No tienes cuenta? Registrate aquí.
        </p>
      </Link>
    </>
  )
}