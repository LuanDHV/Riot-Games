import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AddToCartDto, UpdateCartDto } from './cart.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async getAllCarts() {
    const cartItems = await this.prisma.cart.findMany({
      include: { product: true },
      orderBy: { createdAt: 'asc' },
    });

    // Group products by cartId
    const cartsMap = new Map<string, { cartId: string; products: any[] }>();

    cartItems.forEach((item) => {
      if (!cartsMap.has(item.cartId)) {
        cartsMap.set(item.cartId, { cartId: item.cartId, products: [] });
      }

      cartsMap.get(item.cartId)!.products.push({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        logo: item.product.logo,
        category: item.product.category,
        tags: item.product.tags,
        descriptions: item.product.descriptions,
        imgs: item.product.imgs,
        quantity: item.quantity,
        addedAt: item.createdAt,
      });
    });

    return Array.from(cartsMap.values());
  }

  async getCart(cartId: string) {
    const cartItems = await this.prisma.cart.findMany({
      where: { cartId },
      include: { product: true },
      orderBy: { createdAt: 'asc' },
    });

    if (cartItems.length === 0) {
      throw new NotFoundException('Cart not found');
    }

    return {
      cartId,
      products: cartItems.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        logo: item.product.logo,
        category: item.product.category,
        tags: item.product.tags,
        descriptions: item.product.descriptions,
        imgs: item.product.imgs,
        quantity: item.quantity,
        addedAt: item.createdAt,
      })),
    };
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
        data: { quantity: { increment: dto.quantity } },
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

  async updateCart(cartId: string, productId: number, dto: UpdateCartDto) {
    const cartItem = await this.prisma.cart.findFirst({
      where: { cartId, productId },
    });

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.cart.update({
      where: { id: cartItem.id },
      data: { quantity: dto.quantity },
    });
  }

  async removeFromCart(cartId: string, productId: number) {
    const cartItem = await this.prisma.cart.findFirst({
      where: { cartId, productId },
    });

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.cart.delete({ where: { id: cartItem.id } });
  }
}
