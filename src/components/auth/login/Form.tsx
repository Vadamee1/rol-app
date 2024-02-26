'use client'

import { CustomButton } from "@/components/custom/CustomButton"
import { Input } from "@nextui-org/react"
import { useFormik } from "formik"

export const Form = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {

    }
  })

  return (
    <>
    <form>
      <div>
        <Input
          label="Correo electronico"
          name="email"
          type="email"
          placeholder="example@mail.com"
          variant="bordered"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          label="Correo electronico"
          name="password"
          type="password"
          placeholder="********"
          variant="bordered"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <CustomButton
          size="md"
          color="warning"
          variant="bordered"
        >
          Login
        </CustomButton>
      </div>
    </form>
    </>
  )
}