import { Controller, Body, Post, Get, Res, HttpCode, HttpStatus  } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { IsPublic } from './auth-utils/auth.isPublic';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){};

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(
    @Body() data: any,
    @Res() res: Response,
  ){
    return this.authService.login(data, res);
  };

};
