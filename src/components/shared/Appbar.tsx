import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react"
import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5"
import { AvatarDropdown } from "./AvatarDropdown"
import { PATHHOME } from "@/constants/paths/home"

interface Props {
  isAuthenticated: boolean
  image: string | undefined | null
  name: string | undefined | null
  userId: string | undefined
}

export const Appbar = ({isAuthenticated, image, name, userId}: Props) => {

  return (
    <Navbar>
      <NavbarBrand>
        <Link href={PATHHOME}>
          <IoHomeOutline />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <AvatarDropdown isAuthenticated={isAuthenticated} image={image} name={name} userId={userId}/>
      </NavbarContent>
    </Navbar>
  )
}