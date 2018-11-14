import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'app-product',
    styleUrl: 'app-product.css',
    shadow: true
})

export class Product {

    @Prop({ mutable: true }) product: {name: string, img: string};
    @Event({cancelable: false}) onAddToCart: EventEmitter;

    addToCart() {
        console.log("Add to cart");
        this.onAddToCart.emit({product: this.product})
    }

    render() {
        return (
            <div class="product">
                <p class="title">{this.product.name}</p>
                <img src={this.product.img} alt="Product Img"/>
                <app-button text="Add to Cart" onClick={() => this.addToCart()}></app-button>
            </div>
        )
    }
}