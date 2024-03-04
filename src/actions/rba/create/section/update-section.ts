import prisma from "../../../../../prisma";

export const updateSection = async (sectiionRBAId: number, name: string,  userId: string | undefined,) => {
  try {
    await prisma.sectionRBA.update({
      where: {id: sectiionRBAId},
      data: {
        name
      }
    })

    const data = await prisma.sectionRBA.findMany({
      where: {userId},
      select: {
        id: true,
        name: true,
        accordionRBA: {
          select: {
            id: true,
            title: true,
            description: true
          }
        }
      }
    })

    return {
      text: "Seccón actualziada correctamente.",
      severity: "success",
      data
    }

  } catch (error) {
    console.log(error)
    throw new Error("No se logró.");
  }
}