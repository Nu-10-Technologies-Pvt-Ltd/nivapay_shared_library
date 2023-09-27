import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
  
  @Entity('nivapay_kms_wallet')
  export class NivapayKmsWallet {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    walletId: string;
  
    @Column({ nullable: true })
    walletAddress: string
  
    @Column({ nullable: true })
    signatureId: string
  
    @Column({ nullable: true })
    mnemonicSignatureId: string
  
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
}
  