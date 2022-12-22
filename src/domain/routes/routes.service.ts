import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RouteService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRoutes() {
    const res = await this.prisma.busRoutes.findMany({
      select: {
        id: true,
        routeName: true,
      },
    });

    return res.map((route) => {
      return {
        id: route.id,
        routeName: route.routeName,
        display: true,
      };
    });
  }
  async getWaypointsForRouteById(busRouteId: number) {
    const res = await this.prisma.busRoutes.findFirst({
      where: {
        id: busRouteId,
      },
      select: {
        waypoints: true,
      },
    });
    res.waypoints.sort((a, b) => a.step - b.step);
    const waypoints = res.waypoints.map((waypoint) => {
      const lat = waypoint.latitude;
      const lng = waypoint.longitude;
      return { lat, lng };
    });
    console.log('busRouteId', busRouteId, 'waypoints', waypoints);
    return waypoints;
  }

  async createWaypoints(input: { latitude: any; longitude: any }[]) {
    this.prisma.$transaction(
      input.map((waypoint, index) => {
        const { latitude, longitude } = waypoint;
        return this.prisma.waypoint.create({
          data: {
            latitude,
            longitude,
            step: index,
            busRoute: {
              connect: {
                id: 2,
              },
            },
          },
        });
      }),
    );
  }
}
