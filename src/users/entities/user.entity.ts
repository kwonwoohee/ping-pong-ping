import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserModel {
    // 고유값
    @PrimaryGeneratedColumn()
    id: number;

    //사용자 이름
    @Column()
    name: string;

    //레이팅 점수
    @Column()
    rating: number;

    //생성날짜
    @CreateDateColumn()
    createAt: Date;

    //업데이트 날짜
    @UpdateDateColumn()
    updateAt: Date;
}
