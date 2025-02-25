import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto, UpdateCartDto } from './cart.dto';

@Controller('api/riotmerch/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getAllCarts() {
    return this.cartService.getAllCarts();
  }

  @Get(':cartId')
  getCart(@Param('cartId') cartId: string) {
    return this.cartService.getCart(cartId);
  }

  @Post(':cartId')
  addToCart(@Param('cartId') cartId: string, @Body() dto: AddToCartDto) {
    return this.cartService.addToCart(cartId, dto);
  }

  @Patch(':cartId')
  updateCart(@Param('cartId') cartId: string, @Body() dto: UpdateCartDto) {
    return this.cartService.updateCart(cartId, dto.productId, dto);
  }

  @Delete(':cartId')
  removeFromCart(
    @Param('cartId') cartId: string,
    @Body('productId') productId: number,
  ) {
    return this.cartService.removeFromCart(cartId, productId);
  }
}
