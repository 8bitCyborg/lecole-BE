import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { SchoolsService } from 'src/schools/schools.service';

@Injectable()
export class AuthService {
  constructor(
    private schoolService: SchoolsService,
    private jwtService: JwtService,
  ){};

  async login(body: any , res: Response): Promise<any>{
    try {
      const school = await this.schoolService.findSchool(body?.email);
      if(school?.password != body?.password){
        throw new UnauthorizedException();
      };

      const { password, ...data } = school;
      const payload = { sub: school.email, username: school.name };
      const access_token = await this.jwtService.signAsync(payload);

      return res.status(200).send({
        status: 200,
        data,
        access_token,
      });
    } catch (error) {
      console.log('err', error);
    };
  };
};