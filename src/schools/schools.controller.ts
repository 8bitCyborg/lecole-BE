import { Controller, Post, Get, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolService: SchoolsService){};

  @Post()
  async createSchool(
    @Body() data: any,
    @Res() res: Response,
  ){
    return this.schoolService.createSchool(data, res);
  };
}
