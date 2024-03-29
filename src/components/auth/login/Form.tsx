'use client'

import { useFormState } from "react-dom"
import { Input } from "@nextui-org/react"
import { CustomButton } from "@/components/custom/CustomButton"
import { authenticate } from "@/actions/auth/login"

export const Form = () => {

  const [state, dispatch] = useFormState(authenticate, undefined)

  return (
    <>
      <form action={dispatch}>
        <div className="grid gap-5">
          <div className="flex flex-col gap-3">
            <Input
              label="Correo electronico"
              name="email"
              type="email"
              placeholder="example@mail.com"
              variant="bordered"
            />
            <Input
              label="Correo electronico"
              name="password"
              type="password"
              placeholder="Password"
              variant="bordered"
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