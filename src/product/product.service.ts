import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
      private products = [
            { id: 1, name: "Table", price: 20000 },
            { id: 2, name: "Mobile", price: 20000 },
            { id: 2, name: "laptop", price: 20000 },
      ];

      constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

      async createProduct(): Promise<Product> {
            const product = new this.productModel({
                  title: "Gaming Laptop",
                  tags: [
                        { name: 'electronics' },
                        { name: 'gaming' },
                        { name: 'gaming' },
                  ]
            });

            return await product.save();
      }


      getAllProducts(): Promise<Product[]> {
            // return this.products;
            return this.productModel.find();
      }

      getProductById(id: number) {
            return this.products.find((product) => product.id === id);
      }
}
