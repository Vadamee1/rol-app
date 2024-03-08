'use server'

export const saveImage = async (formData: FormData) => {
  try {
    console.log(formData.getAll('profilePhoto')[0])

    return "se logró"
  } catch (error) {
    console.log(error)
    throw new Error("No se logró.");
  }
}