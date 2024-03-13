import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
  isBlurred?: boolean
  isPressable?: boolean
  className?: string
}

export const CustomCard = ({header, body, footer, isBlurred, isPressable, className}: Props) => {

  return (
    <Card isBlurred={isBlurred ? isBlurred : false} isPressable={isPressable ? isPressable : false} className={className}>
      { 
        header ? 
          <CardHeader>
            {header}
          </CardHeader>
        : "" 
      }
      { 
        body ? 
          <CardBody className="flex justify-center">
            {body}
          </CardBody>
        : "" 
      }
      { 
        footer ? 
          <CardFooter className="">
            {footer}
          </CardFooter>
        : "" 
      }
    </Card>
  )
}