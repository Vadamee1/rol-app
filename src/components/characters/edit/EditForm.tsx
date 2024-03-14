'use client'

import { updateCharacter } from "@/actions/characters/update-characters"
import { navigate } from "@/actions/shared/redirect"
import { CustomImage } from "@/components/custom/CustomImage"
import { HandleToast } from "@/constants/messages/Index"
import { Character } from "@/interfaces/characters/characters"
import { Button, Input, Textarea } from "@nextui-org/react"
import { useFormik } from "formik"
import { redirect } from "next/navigation"
import * as yup from "yup"

interface Props {
  character: Character | null
  userId: string
}

export const EditForm = ({userId, character}: Props) => {

  const formik = useFormik({
    initialValues: {
      id: character?.id,
      userId,
      name: character?.name ? character?.name : "",
      nickname: character?.nickname ? character?.nickname : "",
      age: character?.age ? character?.age : "",
      occupation: character?.occupation ? character?.occupation : "",
      race: character?.race ? character?.race : "",
      fandom: character?.fandom ? character?.fandom : "",
      description: character?.description ? character?.description : ""
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
      const resp = await updateCharacter(values)
      HandleToast(resp)
      navigate(`/characters/${userId}/${character?.id}`)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex gap-3">
        <div className="grid gap-3">
          <div className="flex w-full justify-center">
            <CustomImage
              alt="Character photo"
              src={character?.image ? character.image : "/images/profile/NotImage.jpg"} 
              height={150}
              width={150}
              priority
            />
          </div>
          <Input
            type="file"
          />
          <div className="grid grid-cols-2 gap-3">
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
        </div>
        <div>
          <Textarea
            className="w-96"
            label="Descripción"
            name="description"
            size="lg"
            variant="bordered"
            placeholder="Introduce una descripción"
            value={formik.values.description}
            onChange={formik.handleChange}
            errorMessage={formik.errors.description}
            maxRows={17}
          />
        </div>
      </div>
      <div className="flex justify-end mt-3 gap-3">
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