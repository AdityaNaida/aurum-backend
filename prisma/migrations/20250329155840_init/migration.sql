-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "question" TEXT NOT NULL DEFAULT 'apple',
    "superuser" BOOLEAN NOT NULL DEFAULT false,
    "roles" JSONB NOT NULL DEFAULT '{"permission": {"read": true, "edit": false, "delete": false}}',

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");
