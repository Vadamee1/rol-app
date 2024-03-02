import prisma from "../../../../prisma"

export const sectionOptions = async (userId?: string) => {
  try {
    const data = await prisma.sectionRBA.findMany({
      where: {userId},
      select: {
        id: true,
        name: true
      }
    })

    return data

  } catch {
    throw new Error("No se logró.");
  }
}