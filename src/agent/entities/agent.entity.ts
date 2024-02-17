import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity()
export class Agent {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

//   @OneToOne(() => Wallet, (wallet) => wallet.agent)
//   @JoinColumn()
//   wallet: Wallet;
}
