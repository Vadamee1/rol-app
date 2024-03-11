import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  isOpen: boolean
  onOpenChange: () => void
  header: ReactNode
  body: ReactNode
  footer?: ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
}

export const CustomModal = ({isOpen, onOpenChange, header, body, footer, size}: Props) => {

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      size={size ? size : "md"}
      scrollBehavior="outside"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        }
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              {header}
            </ModalHeader>
            <ModalBody>
              {body}
            </ModalBody>
            {
              footer && (
                <ModalFooter>
                  {footer}
                </ModalFooter>
              )
            }
          </>
        )}
      </ModalContent>
    </Modal>
  )
}