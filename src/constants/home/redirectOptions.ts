import { ListboxItemType } from "@/interfaces/custom/listboxItem";

export const REDIRECTOPTIONS: ListboxItemType[] = [
  {
    key: "edit",
    content: 'Editar "Read before add"',
    color: "danger",
    href: "/rba/edit"
  },
  {
    key: "characters",
    content: "Añadir fichas de personaje",
    color: "danger",
    href: "/characters/create"
  }
]