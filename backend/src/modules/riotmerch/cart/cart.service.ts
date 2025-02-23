import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  // Retrieve the list of cart items
  async getAll() {
    return await this.prisma.cart.findMany({ include: { product: true } });
  }

  // Get details of a specific cart item
  async getById(id: number) {
    return await this.prisma.cart.findUnique({
      where: { id },
      include: { product: true },
    });
  }

  // Add a product to the cart or increase its quantity
  async addToCart(productId: number, quantity: number) {
    const cartItem = await this.prisma.cart.findFirst({ where: { productId } });

    if (cartItem) {
      return await this.prisma.cart.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity + quantity },
      });
    }

    return await this.prisma.cart.create({
      data: { productId, quantity },
    });
  }

  // Update the quantity of a product in the cart
  async updateQuantity(id: number, quantity: number) {
    return await this.prisma.cart.update({
      where: { id },
      data: { quantity },
    });
  }

  // Remove a product from the cart
  async removeFromCart(id: number) {
    return await this.prisma.cart.delete({ where: { id } });
  }
}
