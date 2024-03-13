import { CustomCard } from "../custom/CustomCard"
import { Body } from "./Body"
import { Header } from "./Header"

interface Props {
  userId: string
}

export const RedirectCard = ({userId}: Props) => {

  return (
    <div className="">
      <CustomCard header={<Header/>} body={<Body userId={userId} />} />
    </div>
  )
}