import { auth } from "@/auth.config";
import { ProfilePage } from "@/components/profile";
import { PATHLOGIN } from "@/constants/paths/auth";
import { redirect } from "next/navigation";

export default async function Profile ({params}: {params:{id: string}}) {

  const session = await auth()
  if (!session) redirect(PATHLOGIN)

  const userLogged = session?.user?.id
  const userPage = params.id

  const isOwner = userLogged === userPage ? true : false

  return (
    <>
      <div className="w-full">
        <ProfilePage userId={userPage} isOwner={isOwner}/>
      </div>
    </>
  )
}
