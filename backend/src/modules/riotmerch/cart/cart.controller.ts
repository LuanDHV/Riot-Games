import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('api/riotmerch/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getAllCart() {
    return this.cartService.getAll();
  }

  @Get(':id')
  getCartItem(@Param('id') id: string) {
    return this.cartService.getById(Number(id));
  }

  @Post()
  addToCart(@Body() body: { productId: number; quantity: number }) {
    return this.cartService.addToCart(body.productId, body.quantity);
  }

  @Patch(':id')
  updateCartItem(@Param('id') id: string, @Body() body: { quantity: number }) {
    return this.cartService.updateQuantity(Number(id), body.quantity);
  }

  @Delete(':id')
  removeCartItem(@Param('id') id: string) {
    return this.cartService.removeFromCart(Number(id));
  }
}
