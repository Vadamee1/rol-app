import { getUser } from "@/actions/home/get-user"

interface Props {
  id: string
}

export const TitleHome = async ({id}: Props) => {
  const user = await getUser(id)

  return (
    <>
      <h1 className="mb-4 text-2xl">Bienvenido {user?.name} {user?.lastName}</h1>
    </>
  )
}