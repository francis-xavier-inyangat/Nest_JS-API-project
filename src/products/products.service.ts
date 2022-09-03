import { Injectable, NotFoundException } from "@nestjs/common";
import { stringify } from "querystring";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private products: Product[] = [] //private makes this array only usable inside service

    // add product API
    insertProduct(title:string, desc:any, price:any){
        let prodId =  Math.random().toString() //generates a rndom id
        
        const newProduct = new Product(
            prodId,
            title,
            desc,
            price);
        this.products.push(newProduct);
        return prodId
    }
    // Retrieve all products API
    getProducts(){
        return [...this.products];  // alt this.prooducts.slice()
    }


    // Get single product by ID API

    // the prodSearchId reps a parameter we expect, not just the id we have been using
    getSingleProduct(prodSearchId: string){
        // Alt const product = this.products.find((prod) => prod.id === prodSearchId)
        const product = this.findProduct(prodSearchId);
            return {...product} //...{} is a javascript spread operator: google
    }

    // Update product API
    updateProduct(productId:string, title:string, desc:string, price:number){
        const [product, index] = this.findProduct(productId) //jS array destructuring: google
        const updatedProduct = {...product};
        if (title){
            updatedProduct.title = title;
        }
        if (desc){
            updatedProduct.desc = desc;
        }
        if (price){
            updatedProduct.price = price;
        }
        // update producte
        this.products[index] = updatedProduct;
        }
          // remove a product
    deleteProduct(prodId:string){
        const index = this.findProduct(prodId)[1];
        this.products.splice(index, 1); //splice removes 1 element
    }
   



//    privTE method to find a product to update
 
    private findProduct(id:string): [Product, number]{
        const productIndex = this.products.findIndex(prod =>prod.id === id);
        const product = this.products[productIndex];
        if (!product){
            throw new NotFoundException('Could not find this product');
        }
        return [product, productIndex];

    }




}