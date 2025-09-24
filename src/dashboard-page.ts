import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('dashboard-page')
export class DashboardPage extends LitElement {

  render() {
    return html` `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': DashboardPage
  }
}
