import { CustomModal } from "@/components/custom/CustomModal";
import { Button, Tooltip, useDisclosure } from "@nextui-org/react"
import { IoTrashOutline } from "react-icons/io5"
import { BodyDeleteModal } from "./BodyDeleteModal";
import { SectionOptions, SectionRBA, SectionWithAccordions } from "@/interfaces/rba/create/section";
import { Dispatch, SetStateAction } from "react";

interface Props {
  section: SectionRBA
  userId: string | undefined
  setSections: Dispatch<SetStateAction<SectionOptions[]>>
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const DeleteModal = ({section, userId, setSections, setSectionsWithAccordions}: Props) => {

  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return (
    <>
      <Tooltip content="Eliminar">
        <Button isIconOnly variant="light" color="danger" onClick={onOpen}>
          <IoTrashOutline/>
        </Button>
      </Tooltip>
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header={<p>¿Estás seguro de querer eliminar la sección</p>}
        body={
          <BodyDeleteModal
            onClose={onClose}
            section={section}
            setSections={setSections}
            setSectionsWithAccordions={setSectionsWithAccordions}
            userId={userId}
          />
        }
      />
    </>
  )
}