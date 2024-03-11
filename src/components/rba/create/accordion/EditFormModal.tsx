import { updateAccordion } from "@/actions/rba/accordion/update-accordion"
import { CustomButton } from "@/components/custom/CustomButton"
import { HandleToast } from "@/constants/messages/Index"
import { AccordionRBA } from "@/interfaces/rba/create/accordion"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import * as yup from "yup"

interface Props {
  sections: SectionOptions[]
  accordion: AccordionRBA
  sectionId: number | undefined
  userId: string | undefined
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const EditFormModal = ({accordion, sections, sectionId, userId, setSectionsWithAccordions}: Props) => {

  const formik = useFormik({
    initialValues: {
      title: accordion.title,
      description: accordion.description,
      sectionRBAId: sectionId,
      id: accordion.id
    },
    validationSchema: yup.object().shape({
      title: yup.string().required('Debes ingresar un título.'),
      description: yup.string().required('Debes ingresar una descripción.'),
      sectionRBAId: yup.number().required('Debes elegir a que sección pertenece.')
    }),
    onSubmit: async (values) => {
      const resp = await updateAccordion(values, userId)
      setSectionsWithAccordions(resp.data)
      HandleToast(resp)
    }
  })

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
          <div className="flex justify-end mb-3">
            <CustomButton
              color="primary"
              variant="ghost"
              type="submit"
            >
              Guardar
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}