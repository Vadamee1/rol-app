'use server'

import { CreateUserType } from "@/interfaces/user";
import prisma from "../../../prisma";
import { ALREASDYEXIST } from "@/constants/messages/error/auth";
import { SUCCESS } from "@/constants/messages/success/auth";

export const newUser = async ({ name, lastName, email, password }: CreateUserType) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })

    return SUCCESS

  } catch (error) {
    return ALREASDYEXIST
  }
}