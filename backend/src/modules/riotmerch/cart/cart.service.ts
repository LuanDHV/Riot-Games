import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AddToCartDto, UpdateCartDto } from './cart.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async getAllCarts() {
    return this.prisma.cart.findMany({
      include: { product: true },
    });
  }

  async getCartById(cartId: string) {
    const cartItems = await this.prisma.cart.findMany({
      where: { cartId },
      include: { product: true },
    });

    return cartItems;
  }

  async addToCart(cartId: string, dto: AddToCartDto) {
    if (!cartId) {
      cartId = uuidv4();
    }

    const existingItem = await this.prisma.cart.findFirst({
      where: { cartId, productId: dto.productId },
    });

    if (existingItem) {
      return this.prisma.cart.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + dto.quantity },
      });
    }

    return this.prisma.cart.create({
      data: {
        id: uuidv4(),
        cartId,
        productId: dto.productId,
        quantity: dto.quantity,
      },
    });
  }

  async removeCartById(cartId: string) {
    const cartItems = await this.prisma.cart.findMany({
      where: { cartId },
    });

    if (cartItems.length === 0) {
      throw new NotFoundException('Cart not found');
    }

    return this.prisma.cart.deleteMany({
      where: { cartId },
    });
  }

  async updateCart(cartId: string, id: string, dto: UpdateCartDto) {
    const cartItem = await this.prisma.cart.findUnique({ where: { id } });

    if (!cartItem || cartItem.cartId !== cartId) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.cart.update({
      where: { id },
      data: { quantity: dto.quantity },
    });
  }

  async removeFromCart(cartId: string, id: string) {
    const cartItem = await this.prisma.cart.findUnique({ where: { id } });

    if (!cartItem || cartItem.cartId !== cartId) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.cart.delete({ where: { id } });
  }
}
