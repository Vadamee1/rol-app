import { getUser } from "@/actions/home/get-user"
import { CardInputFile } from "./CardInputFile"

interface Props {
  userId: string
  isOwner: boolean
}

export const BodyProfileCard = async ({userId, isOwner}: Props) => {
  const user = await getUser(userId)
 
  return (
    <div className="grid gap-5 w-full mt-3">
      <div className="flex justify-center">
        <CardInputFile image={user?.image} isOwner={isOwner}/>
      </div>
      <div className="flex justify-center">
        <p>{user?.nickname ? user.nickname : user?.name}</p>
      </div>
    </div>
  )
}