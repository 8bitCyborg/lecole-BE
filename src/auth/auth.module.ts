import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SchoolsModule } from 'src/schools/schools.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SchoolsModule,
    JwtModule.register({
      global: true,
      secret: String(process.env.JWT_CONSTANT),
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {};
