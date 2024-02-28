import { Avatar } from "@nextui-org/react"

interface Props {
  name: string
  size: "sm" | "md" | "lg"
  src: string
  isBodered?: boolean
  as?: any
  className?: string
  isLogged?: boolean
}

export const CustomAvatar = ({name, size, src, isBodered, as, className, isLogged}: Props) => {


  return (
    <Avatar
      name={name}
      size={size}
      src={src}
      isBordered={isBodered}
      as={as ? as : null}
      className={className}
      color={isLogged ? "success" : "default"}
    />
  )
}