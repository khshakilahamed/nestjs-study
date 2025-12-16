import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
      constructor(private readonly productService: ProductService) { }

      @Post()
      createProduct() {
            return this.productService.createProduct();
      }

      @Get()
      getAllProducts() {
            return this.productService.getAllProducts();
      }
}
