import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot(),

    // Configure Redis caching
    CacheModule.register({
      store: redisStore as any, // Fix TypeScript issue
      url: process.env.REDIS_URL, // Redis connection URL
      isGlobal: true,
      ttl: 60, // Time to live for cache (in seconds)
      max: 100, // Max number of items in cache
    }),

    UsersModule,

    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
