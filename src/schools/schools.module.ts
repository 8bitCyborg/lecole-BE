import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      School,
    ]),
  ],
  providers: [SchoolsService],
  controllers: [SchoolsController],
  exports: [SchoolsService],
})
export class SchoolsModule {}
