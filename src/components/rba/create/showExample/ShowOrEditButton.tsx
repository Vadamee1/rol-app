import { CustomButton } from "@/components/custom/CustomButton"
import { Button } from "@nextui-org/react"
import { Dispatch, SetStateAction, useState } from "react"
import { IoCreateOutline, IoEyeOutline } from "react-icons/io5"

interface Props {
  isEditable: boolean
  setIsEditable: Dispatch<SetStateAction<boolean>>
}

export const ShowOrEditButton = ({isEditable, setIsEditable}: Props) => {

  const changeButton = () => {
    if(isEditable === true) {
      setIsEditable(false)
    } else if (isEditable === false) {
      setIsEditable(true)
    }
  }

  return (
    <Button isIconOnly color="primary" variant="light" onClick={changeButton}>
      {
        isEditable === false ? ( <IoCreateOutline/> ) : ( <IoEyeOutline/> )
      }
    </Button>
  )
}