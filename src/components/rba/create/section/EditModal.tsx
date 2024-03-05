import { CustomModal } from "@/components/custom/CustomModal";
import { Button, Tooltip, useDisclosure } from "@nextui-org/react"
import { IoPencilOutline } from "react-icons/io5"
import { FormEditModal } from "./FormEditModal";
import { SectionOptions, SectionRBA, SectionWithAccordions } from "@/interfaces/rba/create/section";
import { Dispatch, SetStateAction } from "react";

interface Props {
  section: SectionRBA
  userId: string | undefined
  setSections: Dispatch<SetStateAction<SectionOptions[]>>
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const EditModal = ({section, userId, setSections, setSectionsWithAccordions}: Props) => {
  
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();


  return (
    <>
      <Tooltip content='Editar'>
        <Button isIconOnly variant="light" color="warning" onClick={onOpen}>
          <IoPencilOutline/>
        </Button>
      </Tooltip>
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header={<p>Editar sección:</p>}
        body={
          <FormEditModal 
            section={section}
            userId={userId}
            onClose={onClose}
            setSections={setSections}
            setSectionsWithAccordions={setSectionsWithAccordions}
          />
        }
      />
    </>
  )
}