import { CustomButton } from "@/components/custom/CustomButton"
import { IoCreateOutline } from "react-icons/io5"

export const FooterButton = () => {

  return (
    <div className="flex w-full justify-center">
      <CustomButton
        color="warning"
        variant="ghost"
      >
        <IoCreateOutline/> Editar
      </CustomButton>
    </div>
  )
}