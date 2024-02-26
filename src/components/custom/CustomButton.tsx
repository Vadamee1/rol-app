import { Button } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  children?: string | ReactNode
  isIconOnly?: boolean
  size: "sm" | "md" | "lg"
  color?: "default" | "warning" | "primary" | "danger"
  link?: any
  href?: string
  variant?: "solid" | "bordered" | "ghost"
}

export const CustomButton = ({children, isIconOnly, size, color, link, href, variant}: Props) => {

  return (
    <Button
      as={link ? link : ""}
      isIconOnly={isIconOnly ? isIconOnly : false}
      size={size}
      color={color}
      href={href}
      variant={variant ? variant : "solid"}
    >
      {children}
    </Button>
  )
}