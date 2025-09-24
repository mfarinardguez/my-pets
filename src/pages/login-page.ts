import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('login-page')
export class LoginPage extends LitElement {

  render() {
    return html` `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-page': LoginPage
  }
}
