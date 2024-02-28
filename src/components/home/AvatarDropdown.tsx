'use client'

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, image } from "@nextui-org/react"
import Link from "next/link"
import { PATHLOGIN } from "@/constants/paths/auth"
import { logout } from "@/actions/auth/logout"

interface Props {
  isAuthenticated: boolean
  image: string | null | undefined
  name: string | undefined | null
}

export const AvatarDropdown = ({isAuthenticated, image, name}: Props) => {

  return (
    <Dropdown>
      <DropdownTrigger>
        <div>
          <Avatar
            name={name ? name : ""}
            size="sm"
            as="button"
            src={image ? image : ""}
            isBordered
            color={isAuthenticated ? "success" : "default"}
          />
        </div>
      </DropdownTrigger>
        {
          isAuthenticated ? (
            <DropdownMenu aria-label="Avatar options">
              <DropdownItem key="">Editar perfil</DropdownItem>
              <DropdownItem key="logout" onClick={() => logout()} >Cerrar sesión</DropdownItem>
            </DropdownMenu>
          ) : (
            <DropdownMenu aria-label="Avatar options">
              <DropdownItem key="login" as={Link} href={PATHLOGIN}>Iniciar sesión</DropdownItem>
            </DropdownMenu>
          )
        }
    </Dropdown>
  )
}