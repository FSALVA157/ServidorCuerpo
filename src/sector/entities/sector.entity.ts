import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Tabla que contiene las opciones de sector (registro y control, estadistica, etc)
 */
@Entity()
export class  Sector {

    @PrimaryGeneratedColumn()
    id_sector: number;

    @Column({
        type: "varchar",
        length: 200
           })
    sector: string;
        }