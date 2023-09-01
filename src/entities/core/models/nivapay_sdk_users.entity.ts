import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('nivapay_sdk_users')
  export class NivapaySdkUsersModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: true })
    partnerUserId: string
  
    @Column({ nullable: true })
    merchantId: string
  
  
    @Column({ nullable: true })
    email: string
  
    @Column({ nullable: true })
    user_first_name: string
  
    @Column({ nullable: true })
    user_last_name: string
  
  
    @Column({ nullable: true })
    user_email_id: string  ///(optional)
    @Column({ nullable: true })
    user_mobileNumber: string  //(optional)
    @Column({ nullable: true })
    user_dob: string  //(optional)
    @Column({ nullable: true })
    user_addressLine1: string //(optional)
    @Column({ nullable: true })
    user_addressLine2: string //(optional)
    @Column({ nullable: true })
    user_city: string  //(optional)
    @Column({ nullable: true })
    user_state: string  //(optional)
    @Column({ nullable: true })
    user_postCode: string  //(optional)
    @Column({ nullable: true })
    user_countryCode: string  //(optional)
  
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
  }
  