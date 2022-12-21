import { ValidationPipe } from '@nestjs/common';

export const StrictValidationPipe = new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  forbidUnknownValues: true,
});

export const LazyValidationPipe = ValidationPipe;
