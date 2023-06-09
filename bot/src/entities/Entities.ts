import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, Unique } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryColumn({ type: 'bigint' })
  padron!: number;
}

@Entity()
@Unique(['nombre'])
export class Carreras {
  @PrimaryColumn({ type: 'int', generated: true })
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'float', nullable: true })
  duracion!: number;
}

@Entity()
export class Materia {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  codigo!: string;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'int', nullable: true })
  creditos!: number;

  @Column({ type: 'varchar', length: 200, nullable: true })
  correlativas!: string;

  @ManyToOne(() => Carreras, carreras => carreras.id)
  carrera!: Carreras;
}

@Entity()
export class AlumnoCarrera {
  @PrimaryColumn({ type: 'bigint' })
  alumnoPadron!: number;

  @PrimaryColumn({ type: 'int' })
  carreraId!: number;

  @ManyToOne(() => Alumno, alumno => alumno.padron)
  alumno!: Alumno;

  @ManyToOne(() => Carreras, carreras => carreras.id)
  carrera!: Carreras;
}

@Entity()
export class AlumnoMateria {
  @PrimaryColumn({ type: 'bigint' })
  alumnoPadron!: number;

  @PrimaryColumn({ type: 'varchar', length: 10 })
  materiaCodigo!: string;

  @ManyToOne(() => Alumno, alumno => alumno.padron)
  alumno!: Alumno;

  @ManyToOne(() => Materia, materia => materia.codigo)
  materia!: Materia;
}

@Entity()
export class MateriaAprobada {
  @PrimaryColumn({ type: 'bigint' })
  alumnoPadron!: number;

  @PrimaryColumn({ type: 'varchar', length: 10 })
  materiaCodigo!: string;

  @ManyToOne(() => Alumno, alumno => alumno.padron)
  alumno!: Alumno;

  @ManyToOne(() => Materia, materia => materia.codigo)
  materia!: Materia;
}