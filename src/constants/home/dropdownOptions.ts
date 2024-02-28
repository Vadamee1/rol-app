'use client'

import { logout } from "@/actions/auth/logout";
import { DropdownItemType } from "@/interfaces/custom/dropdownItem";

export const AVATAROPTIONS: DropdownItemType[] = [
  {
    key: "edit",
    content: "Editar perfil",
    href: ""
  },
  {
    key: "settings",
    content: "Ajustes",
    href: ""
  },
  {
    key: "log out",
    content: "Cerrar sesión",
    onClick: () => logout()
  }
]