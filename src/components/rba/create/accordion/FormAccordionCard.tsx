import { createAccordion } from "@/actions/rba/create/accordion/create-accordion"
import { CustomButton } from "@/components/custom/CustomButton"
import { MessageInterface } from "@/interfaces/common/message"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"
import * as yup from "yup"


interface Props {
  sections: SectionOptions[]
  userId?: string
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const FormAccordionCard = ({sections,userId, setSectionsWithAccordions}: Props) => {

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      sectionRBAId: 0
    },
    validationSchema: yup.object().shape({
      title: yup.string().required('Debes ingresar un título.'),
      description: yup.string().required('Debes ingresar una descripción.'),
      sectionRBAId: yup.number().required('Debes elegir a que sección pertenece.')
    }),
    onSubmit: async (values) => {
      const resp = await createAccordion(values, userId)
      setSectionsWithAccordions(resp.data)
      handleToast(resp)
      handleSetNull()
    }
  })

  const handleSetNull = () => {
    formik.values.sectionRBAId = 0
    formik.values.title = ""
    formik.values.description = ""
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
          <Select
            variant="bordered"
            label="Selecciona una sección"
            items={sections}
            name="sectionRBAId"
            onChange={formik.handleChange}
            errorMessage={formik.errors.sectionRBAId}
          >
            {sections.map((section) => (
              <SelectItem key={section.id} value={formik.values.sectionRBAId}>
                {section.name}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="Título"
            name="title"
            size="md"
            variant="bordered"
            placeholder="Introduce un título"
            value={formik.values.title}
            onChange={formik.handleChange}
            errorMessage={formik.errors.title}
          />
          <Textarea
            label="Descripción"
            name="description"
            size="md"
            variant="bordered"
            placeholder="Introduce una descripción"
            value={formik.values.description}
            onChange={formik.handleChange}
            errorMessage={formik.errors.description}
          />
          <div className="flex justify-end">
            <CustomButton
              color="primary"
              variant="ghost"
              type="submit"
            >
              Crear
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}