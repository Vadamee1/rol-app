import { Button } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  children?: string | ReactNode
  isIconOnly?: boolean
  size?: "sm" | "md" | "lg"
  color?: "default" | "warning" | "primary" | "danger"
  type?: "submit" | "button"
  variant?: "solid" | "bordered" | "ghost"
  className?: string
}

export const CustomButton = ({children, isIconOnly, size, color, type, variant, className}: Props) => {

  return (
    <Button
      isIconOnly={isIconOnly ? isIconOnly : false}
      type={type}
      size={size}
      color={color}
      variant={variant ? variant : "solid"}
      className={className}
    >
      {children}
    </Button>
  )
}