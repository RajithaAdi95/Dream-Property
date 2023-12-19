import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/DreamProperty'),
    PropertyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
