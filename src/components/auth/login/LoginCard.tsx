import { CustomCard } from "../../custom/CustomCard"
import { Header } from "./Header"
import { Form } from "./Form"


export const LoginCard = () => {

  return (
    <CustomCard header={<Header/>} body={<Form/>} />
  )
}