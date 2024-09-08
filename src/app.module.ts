import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SchoolsModule } from './schools/schools.module';
import { StudentsModule } from './students/students.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth-utils/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/Lecole',
      database: 'lecole',
      synchronize: true,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    }),
    SchoolsModule,
    StudentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { 
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
