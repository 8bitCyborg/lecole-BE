import { Controller, Post, Get, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService){}

  @Post()
  async createStudent(
    @Body() data: any,
    @Res() res: Response,
  ){
    return this.studentService.createStudent(data, res);
  }
};
