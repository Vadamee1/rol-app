import { Suspense } from "react"
import { CustomCard } from "../custom/CustomCard"
import { BodyProfileCard } from "./BodyProfileCard"

interface Props {
  userId: string
  isOwner: boolean
}

export const ProfilePage = async ({userId, isOwner}: Props) => {

  return (
    <div className="flex">
      <div className="basis-1/3 ">
        <CustomCard
          body={
            <Suspense>
              <BodyProfileCard userId={userId} isOwner={isOwner}/>
            </Suspense>
          }
        />
      </div>
      <div className="basis-2/3">ascsa</div>
    </div>
  )
}