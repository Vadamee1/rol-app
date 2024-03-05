import { CustomModal } from "@/components/custom/CustomModal"

interface Props {
  isOpen: boolean
  onOpenChange: () => void
} 

export const EditModal = ({isOpen, onOpenChange}: Props) => {

  return (
    <CustomModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      header={<p>Editar acordeones:</p>}
      body
    />
  )
}