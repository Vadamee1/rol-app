
import { ReactNode } from "react"
import { auth } from "@/auth.config"
import { Appbar } from "@/components/home/Appbar"

export default async function HomeLayout({ children }: { children: ReactNode }) {

  const session = await auth()
  const isAuthenticated = !!session?.user
  const image = session?.user?.image
  const name = session?.user?.name

  return (
    <>
      <div className="">
        <Appbar isAuthenticated={isAuthenticated} image={image} name={name}/>
        {children}
      </div>
    </>
  )
}
