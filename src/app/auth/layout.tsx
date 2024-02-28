import { redirect } from "next/navigation"
import { ReactNode } from "react"
import { auth } from "@/auth.config"
import { PATHHOME } from "@/constants/paths/home"

export default async function AuthLayout({ children }: { children: ReactNode }) {

  const sesion = await auth()
  if(sesion?.user) redirect(PATHHOME)

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {children}
      </div>
    </>
  )
}
