import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'app-button',
    styleUrl: 'app-button.css',
    shadow: true
})


export class AppButton {
    @Prop() text: string;

    clickMe() {
        console.log("CLICKED!")
    }

    render() {
        return (
          <button class='app-button' onClick={() => this.clickMe()}>
            {this.text}
          </button>
        );
    }
}


