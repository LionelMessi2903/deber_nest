import { Column,  DeleteDateColumn, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn";

@Entity('curso', { schema: 'curso' })
export class CursoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at', 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAt: Date;
  @Column('varchar',{
    name:'paralelo',
    nullable:false,
    comment:'nombre del paralelo'
  })
  paralelo:string;
  @Column('numeric',{
    name:'numeroParticipantes',
    nullable:false,
    comment:'numero de participantes'
  })
  numeroParticipantes:number;
}

//ADRIAN MUÑOZ
//STEVEN ANDRADE