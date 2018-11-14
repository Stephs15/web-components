import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'app-cart',
    styleUrl: 'app-cart.css',
    shadow: true
})

export class Cart {
    @Prop({ mutable: true }) products: any[] = [];

    addToCart(product: object) {
        this.products.push(product)
    }

    render() {
        return (
            <div class="cart">
                <h1>Quantity: {this.products.length}</h1>
            </div>
        )
    }
}