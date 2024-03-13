import { auth } from "@/auth.config";
import { RedirectCard } from "@/components/home/RedirectCard";

export default async function Home () {
  
  const session = await auth()
  const id = session?.user?.id ? session.user.id : ""
  
  return (
    <>
      <div className="flex">
        <RedirectCard userId={id}/>
      </div>
    </>
  )
}
