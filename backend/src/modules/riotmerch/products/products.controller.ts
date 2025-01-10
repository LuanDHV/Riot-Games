import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/riotmerch/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAll();
  }
}
