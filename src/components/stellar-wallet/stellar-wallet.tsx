import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stellar-wallet',
  styleUrl: 'stellar-wallet.css',
  shadow: true,
})
export class StellarWallet {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
