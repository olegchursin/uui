import {
  css,
  CSSResultArray,
  customElement,
  html,
  LitElement
} from 'lit-element';
import { UuiButton } from 'uui-button';
import { UuiColors, UuiTypography } from 'uui-common';

@customElement('uui-button-holder')
export class UuiButtonHolder extends LitElement {
  title = 'Button Title';
  button: UuiButton;

  static get styles(): CSSResultArray {
    return [
      UuiColors,
      UuiTypography,
      css`
        :host {
          display: block;
        }
        li {
          list-style: none;
        }
        .holder {
          font-family: var(--text-font-family);
          vertical-align: top;
          padding: 20px;
          width: 100%;
          border-bottom: 1px solid blue;
          display: flex;
        }
        .button-area {
          flex: 1;
          display: inline-block;
        }
        .controls-area {
          flex: 1;
        }
        input[type='text'] {
          width: 100%;
        }
      `
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.title = this.button ? this.button.label : this.title;
    this.button.addEventListener('click', () => alert(this.title));
  }

  constructor() {
    super();
    this.button = this.querySelector('uui-button') as UuiButton;
  }

  render() {
    return html`
      <div class="holder">
        <div class="button-area">
        <slot></slot>
        </div>
        <div class="controls-area">
        <input type="checkbox" @click="${() => this.toggleDisabled()}">
          disable
        </input>
        <input type="text" value="${
          this.title
        }" @keyup="${this.titleChanged.bind(this)}">        
        </input>
      </div>
      </div>
    `;
  }

  titleChanged(e: Event) {
    this.title = (e.target as HTMLInputElement).value;
    this.button.label = this.title;
  }

  toggleDisabled() {
    const el = this.querySelector('uui-button');
    if (el) {
      if (el.getAttribute('disabled')) {
        el.removeAttribute('disabled');
      } else {
        el.setAttribute('disabled', 'true');
      }
    }
  }
}
