import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MatchModel {

    // 매치 고유값
    @PrimaryGeneratedColumn()
    id: number;

    // 플레이어 1
    @Column()
    player1: number;

    // 플레이어 2
    @Column()
    player2: number;

    // 스코어
    // ex) [[11,9],[11,8],[0,0]]
    @Column("int", {array: true})
    score: Array<number>;

    // 매치 생성날짜
    @CreateDateColumn()
    createdAt: Date;

    // 매치 수정 날 짜
    @UpdateDateColumn()
    updatedAt: Date;

}
