import { Module } from "@nestjs/common";
import { productsController } from "./products.controller";
import { ProductService } from "./products.service";

@Module({
    controllers: [productsController],
    providers: [ProductService],
})
export class productsModule {}