'use client'

import { createCharacter } from "@/actions/characters/create-character"
import { HandleToast } from "@/constants/messages/Index"
import { Character } from "@/interfaces/characters/characters"
import { Button, Input, Textarea } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import * as yup from "yup"

interface Props {
  userId: string
  setCharacter: Dispatch<SetStateAction<Character[]>>
}

export const CreateForm = ({userId, setCharacter}: Props) => {

  const formik = useFormik({
    initialValues: {
      userId,
      name: "",
      nickname: "",
      age: "",
      occupation: "",
      race: "",
      fandom: "",
      description: ""
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Debes ingresar por lo menos un nombre'),
      nickname: yup.string(),
      age: yup.string(),
      ocuppation: yup.string(),
      race: yup.string(),
      fandom: yup.string(),
      description: yup.string()
    }),
    onSubmit: async (values) => {
      const resp = await createCharacter(values)
      setCharacter(resp.data)
      HandleToast(resp)
      handleSetNull()
    }
  })

  const handleSetNull = () => {
    formik.values.name = ""
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid gap-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <Input
            isRequired
            label="Nombre"
            name="name"
            size="md"
            variant="bordered"
            placeholder="Introduce un nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorMessage={formik.errors.name}
          />
          <Input
            label="Alias"
            name="nickname"
            size="md"
            variant="bordered"
            placeholder="Introduce un alias"
            value={formik.values.nickname}
            onChange={formik.handleChange}
            errorMessage={formik.errors.nickname}
          />
          <Input
            label="Edad"
            name="age"
            size="md"
            variant="bordered"
            placeholder="Introduce una edad"
            value={formik.values.age}
            onChange={formik.handleChange}
            errorMessage={formik.errors.age}
          />
          <Input
            label="Ocupación"
            name="occupation"
            size="md"
            variant="bordered"
            placeholder="Introduce una ocupación"
            value={formik.values.occupation}
            onChange={formik.handleChange}
            errorMessage={formik.errors.occupation}
          />
          <Input
            label="Raza"
            name="race"
            size="md"
            variant="bordered"
            placeholder="Introduce una raza"
            value={formik.values.race}
            onChange={formik.handleChange}
            errorMessage={formik.errors.race}
          />
          <Input
            label="Fandom"
            name="fandom"
            size="md"
            variant="bordered"
            placeholder="Introduce un fandom"
            value={formik.values.fandom}
            onChange={formik.handleChange}
            errorMessage={formik.errors.fandom}
          />
        </div>
        <Textarea
          label="Descripción"
          name="description"
          size="lg"
          variant="bordered"
          placeholder="Introduce una descripción"
          value={formik.values.description}
          onChange={formik.handleChange}
          errorMessage={formik.errors.description}
        />
        <Button 
          color="primary" 
          variant="ghost"
          type="submit"
        >
          Guardar
        </Button>
      </div>
    </form>
  )
}