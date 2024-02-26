import prisma from ".";
import UserSeed from "./seeds/UserSeed";

async function main() {
  await UserSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
