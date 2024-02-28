import { CustomCard } from "@/components/custom/CustomCard";
import { Header } from "@/components/auth/login/Header";
import { Form } from "@/components/auth/login/Form";
import { Footer } from "@/components/auth/login/Footer";

export default function Login () {

  return (
    <CustomCard header={<Header/>} body={<Form/>} footer={<Footer/>}/>
  )
}
