import { Input } from "@nextui-org/react"
import { FormikProps } from "formik"
import { ChangeEvent } from "react"

interface Props {
	variant?: "bordered"
	label: string
  type?: string
	name: string
	placeholder?: string
	formik: FormikProps<any>
}

export const CustomInput = ({variant, name, type, label, placeholder, formik}: Props) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let newValue = event.target.value
		const isValid = newValue === ''
		if (!isValid)return
		formik.setFieldValue(name, newValue, true)
	}

	return (
    <Input
      placeholder={placeholder}
      label={label}
      type={type}
      variant={variant}
      onChange={handleChange}
      errorMessage={formik.touched[name] && !!formik.errors[name]}
    />
	)
}