import { Controller, Post, Body, Get, Param, Patch, Delete} from "@nestjs/common";
import { get } from "http";
import { ProductService } from "./products.service";

@Controller('products')   
export class productsController {
    constructor(private readonly productsService: ProductService ){}


    // adding new product
    @Post() 
    addProduct(
        
        @Body('title') prodTitle:string, 
        @Body('description') prodDesc: string,
         @Body('Price') prodPrice: number 
         ){ const generatedId = this.productsService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice
            );
         
          return {id: generatedId};
         
    }

    // get all products
    @Get()
    getAllProducts(){
       return this.productsService.getProducts()
    }


    // get a single product
    @Get(':id')   //here we tell nest to use id as a aparam, be sure to import param
    getProduct(@Param('id') prodId:string){
    return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct( //body of the update!
        @Param('id') prodId:string,
        @Body('title') prodTitle:string, 
        @Body('description') prodDesc: string,
        @Body('Price') prodPrice: number 
        )
        {
        this.productsService.updateProduct(prodId,prodTitle,prodDesc,prodPrice); 
          return null 
        }


    
        // delete product
    @Delete(':id')
    removeProduct(@Param('id') prodId:string){
        this.productsService.deleteProduct(prodId);
        return null;
    }
}
