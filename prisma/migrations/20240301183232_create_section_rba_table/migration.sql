-- CreateTable
CREATE TABLE "section_rba" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "section_rba_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "section_rba" ADD CONSTRAINT "section_rba_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
