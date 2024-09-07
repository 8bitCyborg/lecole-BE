import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { Response } from 'express';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ){};

  async createStudent(data: any, res: Response){
    try {
      const save = await this.studentRepository.save({ ...data });
      return res.status(200).send({
        status: 200,
        message: 'success',
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error,
      })
    }
  }
}
