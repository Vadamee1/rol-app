import prisma from "..";
import users from "../data/users";

export default async function UserSeed() {
  try {
    await prisma.$transaction(
      users.map(({ name, secondName, lastName, nickname, email, password }) =>
        prisma.user.upsert({
          create: {
            name,
            secondName,
            lastName,
            nickname,
            email,
            password,
          },
          update: {
            password,
          },
          where: { email },
        })
      )
    );
  } catch (error) {
    console.log(error);
  }
}
