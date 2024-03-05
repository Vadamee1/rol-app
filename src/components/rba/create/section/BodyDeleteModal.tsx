import { deleteSection } from "@/actions/rba/section/delete-section"
import { MessageInterface } from "@/interfaces/common/message"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Button } from "@nextui-org/react"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"

interface Props {
  section: SectionOptions
  userId: string | undefined
  onClose: () => void
  setSections: Dispatch<SetStateAction<SectionOptions[]>>
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const BodyDeleteModal = ({onClose, userId, section, setSections, setSectionsWithAccordions}: Props) => {

  const onClick = async (id: number) => {
    const resp = await deleteSection(id, userId)
    setSections(resp.data)
    setSectionsWithAccordions(resp.data)
    handleToast(resp)
  }

  const handleToast = ({text, severity}: MessageInterface) => {
    if (severity === "error") {
      toast.error(text)
    }
    toast.success(text)
  }

  return (
    <div className="">
      <p>Ten en cuenta que eliminar una sección implica eliminar todos los acordeones que tenga.</p>
      <div className="flex gap-2 justify-end mt-5">
        <Button color="danger" variant="ghost" onPress={onClose}>
          Cancelar
        </Button>
        <Button color="primary" variant="ghost" onPress={onClose} onClick={() => onClick(section.id)}>
          Aceptar
        </Button>
      </div>
    </div>
  )
} 