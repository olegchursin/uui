import {
  css,
  CSSResultArray,
  customElement,
  html,
  LitElement,
  TemplateResult
} from 'lit-element';
import { UuiColors, UuiTypography } from 'uui-common';

const defaultCardTheme = css`
  * {
    --card-text: var(--gray-a);
    --card-background: #ffffff;
  }
`;

@customElement('uui-card')
export class UuiCard extends LitElement {
  static get styles(): CSSResultArray {
    return [
      UuiColors,
      UuiTypography,
      defaultCardTheme,
      css`
        :host {
          display: inline-block;
        }
        .uui-card {
          min-height: 80px;
          min-width: 250px;
          max-width: 600px;
          margin-right: 20px;
          padding: 10px 20px 20px;
          border: none;
          border-radius: 4px;
          color: var(--card-text);
          background-color: var(--card-background);
          font-family: var(--text-font-family);
          font-size: var(--text-body-font-size);
          font-weight: var(--text-body-font-weight);
          line-height: var(--text-body-line-height);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <div class="uui-card">
        <slot></slot>
      </div>
    `;
  }
}
