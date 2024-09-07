import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SchoolsModule } from './schools/schools.module';
import { StudentsModule } from './students/students.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
