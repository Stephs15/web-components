import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'minicart-view',
  styleUrl: 'minicart-view.css',
  shadow: true
})
export class MinicartView {
	@Prop() sid: string;
	@Prop() content: Object;

	componentWillLoad() {
		/*
	  return fetch(`https://staging.mesos.www.zooplus.de/checkout/api/cart-api/v1/cart/${this.sid}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
        },
      })
	    .then(response => response.json())
	    .then(data => {
	      this.content = data;
	    });
	    */
	    this.content = {"cartId":215300021,"sid":"5FC3147F9C464EF6FF2C253654735B87-1541667267135","currency":"EUR","locale":"de_DE","articles":[{"id":1703938,"shopId":"508449.0","type":"Standard","name":"Royal Canin Veterinary Diet Feline Obesity Management","price":11.99,"quantity":1,"subtotal":11.99,"bestPriceArticle":false}],"discounts":[{"type":"NewCustomer","selCode":null,"absoluteDiscount":null,"percentageDiscount":5.0,"subtotal":-0.6}],"fees":[{"type":"Shipping","name":"Shipping Costs","absolutePrice":2.99,"percentagePrice":0.0,"subtotal":2.99}],"summary":{"grandTotal":14.38,"subTotal":11.99,"articleCount":1}};
	    console.log(this.content);
	}

	render() {
		return(
			<div>
				{this.content.cartId}
			</div>
		);
	}
}