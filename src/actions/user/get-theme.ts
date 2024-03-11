import prisma from "../../../prisma";

export const getTheme = async (userId?: string) => {
  try {
    const data = await prisma.user.findFirst({
      where: {id: userId},
      select: {
        theme: true
      }
    })

    return data?.theme

  } catch {
    return "dark"
  }
}