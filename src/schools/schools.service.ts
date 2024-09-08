import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';

import { Response } from 'express';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School)
    private schoolsRepository: Repository<School>,
  ){};

  async createSchool(data: any, res: Response){
    try {
      const save = await this.schoolsRepository.save({
        ...data,
      });

      return res.status(200).send({
        status: 200,
        message: 'success',
      });
    } catch (error) {
      console.log('error', error);
      return res.status(400).send({
        status: 400,
        error,
      });
    };
  };

  async findSchool(identifier: string){
    try {
      const school = await this.schoolsRepository.findOneBy({ email: identifier });
      return school;
    } catch (error) {
      console.log(error);
    };
  };
};
