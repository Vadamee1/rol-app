import { REDIRECTOPTIONS } from "@/constants/home/redirectOptions"
import { CustomListbox } from "../custom/CustomListbox"

export const Body = () => {

  return (
    <>
      <CustomListbox items={REDIRECTOPTIONS}/>
    </>
  )
}