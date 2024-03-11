-- CreateTable
CREATE TABLE "character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "nickname" VARCHAR(50),
    "age" VARCHAR(10),
    "occupation" VARCHAR(50),
    "race" VARCHAR(50),
    "fandom" VARCHAR(50),
    "image" VARCHAR(255),
    "description" VARCHAR(1000),
    "userId" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "character_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
