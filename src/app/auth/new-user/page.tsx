import { CustomCard } from "@/components/custom/CustomCard";
import { Header } from "@/components/auth/new-user/Header";
import { Form } from "@/components/auth/new-user/Form";
import { Footer } from "@/components/auth/new-user/Footer";

export default function NewUser () {

  return (
    <CustomCard header={<Header/>} body={<Form/>} footer={<Footer/>}/>
  )
}
