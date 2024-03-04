'use client'

import { Input } from "@nextui-org/react"
import { CustomButton } from "@/components/custom/CustomButton"
import { useFormik } from "formik"
import { newUser } from "@/actions/auth/newUser"
import { redirect } from "next/navigation"
import { PATHLOGIN } from "@/constants/paths/auth"
import { useState } from "react"
import * as yup from "yup";
import { toast } from "react-toastify"

export const Form = () => {
  const [isSubmit, setIsSubmit] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: ""
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('El campo es obligatorio')
        .min(3, 'El nombre debe tener más de 3 carácteres'),
      lastName: yup.string().required('El campo es obligatorio')
        .min(3, 'El apellido debe tener más de 3 cáractere'),
      email: yup.string().required('El campo es obligatorio')
        .email('Correo inválido'),
      password: yup.string().required('El campo es obligatorio')
        .min(5, 'La contraseña debe tener al menos 5 carácteres')
        .max(25,'La contraseña no puede exceder 35 carácteres')
    }),
    onSubmit: async (values) => {
      const resp = await newUser(values)
      if(resp.severity === 'error') {
        toast.error(resp.text)
      }
      if(resp.severity === "success") {
        setIsSubmit(true)
      }
    }
  })

  if(isSubmit) redirect(PATHLOGIN)

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-5">
          <div className="flex flex-col gap-3">
            <Input
              label="Nombre"
              name="name"
              placeholder="Nombre"
              variant="bordered"
              onChange={formik.handleChange}
              value={formik.values.name}
              errorMessage={formik.errors.name}
            />
            <Input
              label="Apellido"
              name="lastName"
              placeholder="Apellido"
              variant="bordered"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              errorMessage={formik.errors.lastName}
            />
            <Input
              label="Correo electronico"
              name="email"
              type="email"
              placeholder="example@mail.com"
              variant="bordered"
              onChange={formik.handleChange}
              value={formik.values.email}
              errorMessage={formik.errors.email}
            />
            <Input
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Password"
              variant="bordered"
              onChange={formik.handleChange}
              value={formik.values.password}
              errorMessage={formik.errors.password}
            />
            <CustomButton
              size="md"
              color="warning"
              variant="bordered"
              type="submit"
            >
              Login
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}