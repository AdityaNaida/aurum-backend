import { Module } from '@nestjs/common';
import { FolderController } from './folder.controller';
import { FolderService } from './folder.service';

@Module({
  providers: [FolderService],
  controllers: [FolderController],
})
export class FolderModule {}
