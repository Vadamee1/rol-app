import { CustomCard } from "../custom/CustomCard"
import { Body } from "./Body"
import { Header } from "./Header"

export const RedirectCard = () => {

  return (
    <div className="">
      <CustomCard header={<Header/>} body={<Body/>} />
    </div>
  )
}