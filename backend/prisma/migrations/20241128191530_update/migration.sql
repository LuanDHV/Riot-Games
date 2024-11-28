-- CreateTable
CREATE TABLE "WhatsHappening" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "thumbMain" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "WhatsHappening_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "launchImg" TEXT NOT NULL,
    "logotype" TEXT NOT NULL,
    "platforms" TEXT[],
    "link" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Esports" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Esports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entertainments" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Entertainments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeaturedNews" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "FeaturedNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChooseYourChampion" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "champion" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgChampion" TEXT NOT NULL,

    CONSTRAINT "ChooseYourChampion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MultipleWaysToPlay" (
    "id" SERIAL NOT NULL,
    "way" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MultipleWaysToPlay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TheLatest" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TheLatest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LatestNews" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "LatestNews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WhatsHappening_title_key" ON "WhatsHappening"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Games_launchImg_key" ON "Games"("launchImg");

-- CreateIndex
CREATE UNIQUE INDEX "Esports_img_key" ON "Esports"("img");

-- CreateIndex
CREATE UNIQUE INDEX "Entertainments_img_key" ON "Entertainments"("img");

-- CreateIndex
CREATE UNIQUE INDEX "FeaturedNews_img_key" ON "FeaturedNews"("img");

-- CreateIndex
CREATE UNIQUE INDEX "ChooseYourChampion_role_key" ON "ChooseYourChampion"("role");

-- CreateIndex
CREATE UNIQUE INDEX "MultipleWaysToPlay_way_key" ON "MultipleWaysToPlay"("way");

-- CreateIndex
CREATE UNIQUE INDEX "TheLatest_img_key" ON "TheLatest"("img");

-- CreateIndex
CREATE UNIQUE INDEX "LatestNews_img_key" ON "LatestNews"("img");
