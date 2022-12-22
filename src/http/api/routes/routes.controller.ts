import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { StrictValidationPipe } from 'src/core/validations/validation.pipe';
import { RouteService } from 'src/domain/routes/routes.service';
import {
  AllWaypointsInput,
  CreateWaypointInput,
  FavoriteRouteInput,
  addToFavorite,
} from './types';

@Controller('routes')
export class RouteController {
  constructor(private routeService: RouteService) {}

  @Get('getAll')
  async getAllRoutes() {
    return this.routeService.getAllRoutes();
  }

  @Post('waypoints')
  async getAllWaypoints(@Body(StrictValidationPipe) input: addToFavorite) {
    console.log('input', input);
    return this.routeService.getWaypointsForRouteById(input.busRouteId);
  }

  @Get('favorite')
  async getFavoriteRoutes(
    @Body(StrictValidationPipe) input: FavoriteRouteInput,
  ) {
    return this.routeService.getFavoriteRoutes(input.id);
  }
  @Post('addToFavorite')
  async addFavoriteRoute(@Body(StrictValidationPipe) input: addToFavorite) {
    return this.routeService.addToFavorites(input.busRouteId, input.id);
  }
  @Post('removeFromFavorites')
  async removeFromFavorites(@Body(StrictValidationPipe) input: addToFavorite) {
    return this.routeService.removeFromFavorites(input.busRouteId, input.id);
  }
  @Post('createWaypoints')
  async createWaypoints(
    @Body(StrictValidationPipe) input: { latitude: any; longitude: any }[],
  ) {
    return this.routeService.createWaypoints(input);
  }
}
