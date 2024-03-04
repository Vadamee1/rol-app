-- CreateTable
CREATE TABLE "accordion_rba" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(25) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "section_rba_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "accordion_rba_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accordion_rba" ADD CONSTRAINT "accordion_rba_section_rba_id_fkey" FOREIGN KEY ("section_rba_id") REFERENCES "section_rba"("id") ON DELETE CASCADE ON UPDATE CASCADE;
