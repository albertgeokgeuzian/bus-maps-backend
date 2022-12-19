-- CreateTable
CREATE TABLE "BusRoutes" (
    "id" SERIAL NOT NULL,
    "routeName" TEXT NOT NULL,
    "routeNo" TEXT NOT NULL,

    CONSTRAINT "BusRoutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waypoint" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "busRouteId" INTEGER NOT NULL,

    CONSTRAINT "Waypoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Waypoint" ADD CONSTRAINT "Waypoint_busRouteId_fkey" FOREIGN KEY ("busRouteId") REFERENCES "BusRoutes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
