import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // Default cache time-to-live (seconds)
      max: 100, // Maximum number of cached items
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
