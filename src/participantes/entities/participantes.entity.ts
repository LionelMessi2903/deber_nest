import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Participante } from './participantes.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Participante, participant => participant.courses)
  @JoinTable()
  participants: Participante[];
}
export { Participante };

