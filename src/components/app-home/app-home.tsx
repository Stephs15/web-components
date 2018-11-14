import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @Listen('onAddToCart') // Listen to the onToggle event from the dropdown component
  log(event) {
    console.log(event);
    this.quantity += 1;
  }

  @State() quantity: number = 0;

  render() {
    return (
      <div class='app-home'>
        <h1>Quantity: {this.quantity}</h1>
        <product-list></product-list>
      </div>
    );
  } 
}
