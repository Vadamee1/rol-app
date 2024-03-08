-- CreateTable
CREATE TABLE "profile_picture" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "profile_picture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profile_picture" ADD CONSTRAINT "profile_picture_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
