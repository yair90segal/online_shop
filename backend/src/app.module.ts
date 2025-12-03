import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ProductModule } from './products/product.module';

// Don't forget to initialize .env file

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [__dirname + '/../.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    UserModule,
    AuthModule,
    CloudinaryModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
