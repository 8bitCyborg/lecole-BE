import {
  Entity,
  ObjectId,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class School {
  @ObjectIdColumn()
  _id?: ObjectId;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};