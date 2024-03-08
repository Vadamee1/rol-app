'use client'

import { saveImage } from "@/actions/profile/create-image"
import { Button, Card, CardFooter } from "@nextui-org/react"
import { useFormik } from "formik"
import { CustomImage } from "../custom/CustomImage"
import { useRef, useState } from "react"

interface Props {
  image: string | null | undefined
  isOwner: boolean
}

export const CardInputFile = ({image, isOwner}: Props) => {

  const [onEdit, setOnEdit] = useState(false)

  const formik = useFormik({
    initialValues: {
      profilePhoto: ""
    },
    onSubmit: async (values) => {
      const formData = new FormData()

      formData.append('profilePhoto', values.profilePhoto)
      const ol = await saveImage(formData)
      console.log(ol)
    }
  })

  const handleFileChange = (e: any) => {
    formik.setFieldValue('profilePhoto', e.target.files[0])
  }

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSelectClick = () => {
    if (isOwner) {
      if (inputRef.current) inputRef.current.click()
      console.log(onEdit)
    } else {
      console.log('ver foto')
    }
    setOnEdit(true)
  }


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CustomImage
            alt="Profile picture"
            src={image ? image : "/images/profile/NotImage.jpg"}
            height={200}
            width={200}
            className="z-0 w-full h-full object-cover"
            priority={true}
          />
          {isOwner && !onEdit && !image ? (
            <CardFooter
            className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center"
            onClick={handleSelectClick}
            >
              <p className="text-black">add photo</p>
            </CardFooter>
          ) : ''}
        </Card>
        <input 
          type="file"
          name="proflePhoto"
          onChange={handleFileChange}
          className="hidden"
          ref={inputRef}
        />
        <Button type="submit">send</Button>
      </form>
    </>
  )
}