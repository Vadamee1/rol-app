import { CustomCard } from "../../custom/CustomCard"
import { CreateForm } from "./CreateForm"

export const CreateCharacterCard = () => {

  return (
    <>
      <CustomCard
        body={<CreateForm/>} 
      />
    </>
  )
}