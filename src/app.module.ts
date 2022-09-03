import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productsModule } from './products/products.module';

@Module({
  imports: [productsModule], // we import productModule to be able to run our app
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
