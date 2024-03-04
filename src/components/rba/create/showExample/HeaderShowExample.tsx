import { Dispatch, SetStateAction } from "react"
import { ShowOrEditButton } from "./ShowOrEditButton"

interface Props {
  isEditable: boolean
  setIsEditable: Dispatch<SetStateAction<boolean>>
}

export const HeaderShowExample = ({isEditable, setIsEditable}: Props) => {

  return (
    <>
      <div className="flex w-full justify-between"> 
        <div>
          <p>De esta forma es como se verá:</p>
        </div>
        <ShowOrEditButton isEditable={isEditable} setIsEditable={setIsEditable} />
      </div>
    </>
  )
}