import { auth } from "@/auth.config"
import { Divider } from "@nextui-org/react"
import { Appbar } from "@/components/shared/Appbar"

export default async function RolLayout({ children }: { children: React.ReactNode }) {

  const session = await auth()
  const isAuthenticated = !!session?.user
  const user = session?.user

  return (
    <>
      <div className="">
        <Appbar isAuthenticated={isAuthenticated} image={user?.image} name={user?.name} userId={user?.id}/>
        <Divider />
        {children}
      </div>
    </>
  )
}
