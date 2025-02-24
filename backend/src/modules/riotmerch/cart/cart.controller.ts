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

  @Patch(':cartId/:id')
  updateCart(
    @Param('cartId') cartId: string,
    @Param('id') id: string,
    @Body() dto: UpdateCartDto,
  ) {
    return this.cartService.updateCart(cartId, id, dto);
  }

  @Delete(':cartId/:id')
  removeFromCart(@Param('cartId') cartId: string, @Param('id') id: string) {
    return this.cartService.removeFromCart(cartId, id);
  }

  @Delete(':cartId')
  clearCart(@Param('cartId') cartId: string) {
    return this.cartService.clearCart(cartId);
  }
}
