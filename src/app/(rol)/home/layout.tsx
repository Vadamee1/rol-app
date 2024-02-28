import { auth } from "@/auth.config";
import { TitleHome } from "@/components/home/TitleHome";

export default async function HomeLayout({ children }: { children: React.ReactNode }) {

  const session = await auth()
  const id = session?.user?.id

  return (
    <>
      <div className="p-5">
        {
          id && (<TitleHome id={id} />)
        }
        {children}
      </div>
    </>
  )
}

