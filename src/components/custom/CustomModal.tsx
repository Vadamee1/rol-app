import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { ReactNode } from "react"

interface Props {
  isOpen: boolean
  onOpenChange: () => void
  header: ReactNode
  body: ReactNode
  footer?: ReactNode
}

export const CustomModal = ({isOpen, onOpenChange, header, body, footer}: Props) => {

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
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