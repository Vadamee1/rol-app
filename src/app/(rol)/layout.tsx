import { auth } from "@/auth.config"
import { Divider } from "@nextui-org/react"
import { Appbar } from "@/components/shared/Appbar"

export default async function RolLayout({ children }: { children: React.ReactNode }) {

  const session = await auth()
  const isAuthenticated = !!session?.user
  const image = session?.user?.image
  const name = session?.user?.name

  return (
    <>
      <div className="">
        <Appbar isAuthenticated={isAuthenticated} image={image} name={name}/>
        <Divider />
        {children}
      </div>
    </>
  )
}
