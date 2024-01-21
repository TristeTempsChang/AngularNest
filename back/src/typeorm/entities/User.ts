import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'JeanCharle45'})
    @Column({unique: true})
    username: string;

    @ApiProperty({ example: 'jean.charles@gmail.com'})
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    @Column()
    createdAt: Date;
}