import { updateSection } from "@/actions/rba/section/update-section"
import { MessageInterface } from "@/interfaces/common/message"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Button, Input } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"

interface Props {
  section: SectionOptions
  userId: string | undefined
  onClose: () => void
  setSections: Dispatch<SetStateAction<SectionOptions[]>>
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const FormEditModal = ({section, userId, onClose, setSections, setSectionsWithAccordions}: Props) => {

  const formik = useFormik({
    initialValues: {
      userId,
      id: section.id,
      name: section.name
    },
    onSubmit: async (values) => {
      const resp = await updateSection(values.id, values.name, userId)
      setSections(resp.data)
      setSectionsWithAccordions(resp.data)
      handleToast(resp)
      handleSetNull()
    }
  })

  const handleSetNull = () => {
    formik.values.name = ""
  }

  const handleToast = ({text, severity}: MessageInterface) => {
    if (severity === "error") {
      toast.error(text)
    }
    toast.success(text)
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input
            label="Título"
            name="name"
            size="md"
            variant="bordered"
            placeholder="Introduce un título"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorMessage={formik.errors.name}
          />
          <div className="flex justify-end">
            <Button
              color="primary"
              variant="ghost"
              type="submit"
              onPress={onClose}
            >
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}