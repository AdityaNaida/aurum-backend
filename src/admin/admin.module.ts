import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // Default cache time-to-live (seconds)
      max: 100, // Maximum number of cached items
    }),
  ],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
