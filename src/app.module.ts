import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AgentModule } from './agent/agent.module';
// import { WalletModule } from './wallet/wallet.module';
// import { TransactionModule } from './transaction/transaction.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { agent } from 'supertest';
import { Agent } from 'http';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'xbillpay',
      entities: [
        Agent
        // 'src/agent/agent.entity.ts',
        // 'src/payment-gateway/payment-gateway.entity.ts',
        // 'src/wallet/wallet.entity.ts',
        // 'src/bill-payment/bill-payment.entity.ts',
        // 'src/wallet-to-wallet-transfer/wallet-to-wallet-transfer.entity.ts',
        // 'src/wallet-funding/wallet-funding.entity.ts',
        // 'src/agent-commission/agent-commission.entity.ts',
        // 'src/agent-transaction-history/agent-transaction-history.entity.ts',
      ],
      synchronize: true,
    }),
    AgentModule,
    // WalletModule,
    // TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
