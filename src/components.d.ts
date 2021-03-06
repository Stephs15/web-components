/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AppButton {
    'clickEvent': void;
    'text': string;
  }
  interface AppButtonAttributes extends StencilHTMLAttributes {
    'clickEvent'?: void;
    'text'?: string;
  }

  interface AppCart {
    'products': any[];
  }
  interface AppCartAttributes extends StencilHTMLAttributes {
    'products'?: any[];
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface ProductList {
    'cart': any[];
    'products': any[];
  }
  interface ProductListAttributes extends StencilHTMLAttributes {
    'cart'?: any[];
    'products'?: any[];
  }

  interface AppProduct {
    'product': {name: string, img: string};
  }
  interface AppProductAttributes extends StencilHTMLAttributes {
    'onOnAddToCart'?: (event: CustomEvent) => void;
    'product'?: {name: string, img: string};
  }

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppButton': Components.AppButton;
    'AppCart': Components.AppCart;
    'AppHome': Components.AppHome;
    'ProductList': Components.ProductList;
    'AppProduct': Components.AppProduct;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-button': Components.AppButtonAttributes;
    'app-cart': Components.AppCartAttributes;
    'app-home': Components.AppHomeAttributes;
    'product-list': Components.ProductListAttributes;
    'app-product': Components.AppProductAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppButtonElement extends Components.AppButton, HTMLStencilElement {}
  var HTMLAppButtonElement: {
    prototype: HTMLAppButtonElement;
    new (): HTMLAppButtonElement;
  };

  interface HTMLAppCartElement extends Components.AppCart, HTMLStencilElement {}
  var HTMLAppCartElement: {
    prototype: HTMLAppCartElement;
    new (): HTMLAppCartElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLProductListElement extends Components.ProductList, HTMLStencilElement {}
  var HTMLProductListElement: {
    prototype: HTMLProductListElement;
    new (): HTMLProductListElement;
  };

  interface HTMLAppProductElement extends Components.AppProduct, HTMLStencilElement {}
  var HTMLAppProductElement: {
    prototype: HTMLAppProductElement;
    new (): HTMLAppProductElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-button': HTMLAppButtonElement
    'app-cart': HTMLAppCartElement
    'app-home': HTMLAppHomeElement
    'product-list': HTMLProductListElement
    'app-product': HTMLAppProductElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-button': HTMLAppButtonElement;
    'app-cart': HTMLAppCartElement;
    'app-home': HTMLAppHomeElement;
    'product-list': HTMLProductListElement;
    'app-product': HTMLAppProductElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
