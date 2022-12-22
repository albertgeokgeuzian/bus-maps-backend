import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { StrictValidationPipe } from 'src/core/validations/validation.pipe';
import { RouteService } from 'src/domain/routes/routes.service';
import { AllWaypointsInput, CreateWaypointInput } from './types';

@Controller('routes')
export class RouteController {
  constructor(private routeService: RouteService) {}

  @Get('getAll')
  async getAllRoutes() {
    return this.routeService.getAllRoutes();
  }

  @Post('waypoints')
  async getAllWaypoints(@Body(StrictValidationPipe) input: AllWaypointsInput) {
    console.log('input', input);
    return this.routeService.getWaypointsForRouteById(input.busRouteId);
  }
  @Post('createWaypoints')
  async createWaypoints(
    @Body(StrictValidationPipe) input: { latitude: any; longitude: any }[],
  ) {
    return this.routeService.createWaypoints(input);
  }
}
