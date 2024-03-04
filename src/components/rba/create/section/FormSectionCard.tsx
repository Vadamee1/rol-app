'use client'

import { createSection } from "@/actions/rba/create/section/create-section"
import { CustomButton } from "@/components/custom/CustomButton"
import { MessageInterface } from "@/interfaces/common/message"
import { SectionOptions, SectionWithAccordions } from "@/interfaces/rba/create/section"
import { Input } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"
import * as yup from "yup"

interface Props {
  userId?: string
  setSections: Dispatch<SetStateAction<SectionOptions[]>>
  setSectionsWithAccordions: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const FormSectionCard = ({userId, setSections, setSectionsWithAccordions}: Props) => {

  const formik = useFormik({
    initialValues: {
      userId: userId ? userId : "",
      name: ""
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Debes ingresar un nombre')
    }),
    onSubmit: async (values) => {
      const resp = await createSection(values)
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