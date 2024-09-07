import {
  Entity,
  ObjectId,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  name: string;

  @Column()
  school_ref: string;

  @Column()
  class_ref: string;

  @Column({ unique: true })
  student_email: string;

  @Column()
  guardian_email: string;

  @Column()
  guardian_phone: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};
