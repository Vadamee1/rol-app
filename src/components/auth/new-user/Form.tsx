'use client'

import { Input } from "@nextui-org/react"
import { CustomButton } from "@/components/custom/CustomButton"

export const Form = () => {


  return (
    <>
      <form>
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
            >
              Login
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}