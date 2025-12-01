import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
      private products = [
            { id: 1, name: "Table", price: 20000 },
            { id: 2, name: "Mobile", price: 20000 },
            { id: 2, name: "laptop", price: 20000 },
      ];


      getAllProducts() {
            return this.products;
      }

      getProductById(id: number) {
            return this.products.find((product) => product.id === id);
      }
}
