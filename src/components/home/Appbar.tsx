import { PATHHOME } from "@/constants/paths/home"
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react"
import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5"
import { CustomDropdown } from "../custom/CustomDropdown"
import { CustomAvatar } from "../custom/CustomAvatar"
import { AVATAROPTIONS } from "@/constants/home/dropdownOptions"
import { Session } from "next-auth"
import { AvatarDropdown } from "./AvatarDropdown"

interface Props {
  isAuthenticated: boolean
  image: string | undefined | null
  name: string | undefined | null
}

export const Appbar = ({isAuthenticated, image, name}: Props) => {

  return (
    <Navbar>
      <NavbarBrand>
        <Link href={PATHHOME}>
          <IoHomeOutline />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <AvatarDropdown isAuthenticated={isAuthenticated} image={image} name={name} />
      </NavbarContent>
    </Navbar>
  )
}