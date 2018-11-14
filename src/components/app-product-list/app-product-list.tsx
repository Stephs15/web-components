import { Component, Prop } from '@stencil/core';
import { getProduct } from '../../global/http-service'

@Component({
    tag: 'product-list',
    styleUrl: 'app-product-list.css',
    shadow: true
})

export class ProductList {

    @Prop({ mutable: true }) products: any[] = [];
    @Prop({ mutable: true }) cart: any[] = [];

    componentWillLoad() {
        this.products = getProduct();
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <div class="product-list">
                    {this.products.map((product) =>
                        <app-product product={product}></app-product>
                    )}
                </div>
            </div>
        )
    }
}