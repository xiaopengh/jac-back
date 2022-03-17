import{ Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()

export class userEntity{
    @PrimaryGeneratedColumn('uuid') id : string;
    @Column('text') first_name : string;
    @Column('text') last_name : string
}
