import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Tabla que contiene las opciones de situacion de departamento (Vigilancia y Tratamiento, Seguridad Externa, etc)
 */
@Entity()
export class  Departamento {

    @PrimaryGeneratedColumn()
    id_departamento: number;

    @Column({
        type: "varchar",
        length: 200
           })
    departamento: string;

    @Column({
        type: "int"
    })
    destino_id: number;

        }