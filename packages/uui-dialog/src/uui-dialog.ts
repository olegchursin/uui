import {
  css,
  CSSResultArray,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element';
import { UuiColors, UuiTypography } from 'uui-common';

const defaultDialogTheme = css`
  * {
    --dialog-text-color: var(--gray-a);
    --dialog-background-color: #ffffff;
    --dialog-close-icon-size: 28px;
    --default-trnasition-time: 0.3s;
  }
`;

@customElement('uui-dialog')
export class UuiDialog extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;

  static get styles(): CSSResultArray {
    return [
      UuiColors,
      UuiTypography,
      defaultDialogTheme,
      css`
        #container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: var(--uui-dialog-z-index, 100);
        }
        #container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity
            var(--uui-dialog-transition-time, --default-trnasition-time) ease;
        }
        #overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transform: translateY(150px);
          transition: transform
              var(--uui-dialog-transition-time, --default-trnasition-time) ease,
            opacity var(--uui-dialog-transition-time, --default-trnasition-time)
              ease;
        }
        .layout.vertical {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: column;
          -webkit-flex-direction: column;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .uui-dialog__wrapper {
          min-height: 80px;
          min-width: 250px;
          width: var(--uui-dialog-width, 75%);
          margin-right: 20px;
          padding: 20px;
          border: none;
          border-radius: 4px;
          color: var(--dialog-text-color);
          background-color: var(--dialog-background-color);
          font-family: var(--text-font-family);
          font-size: var(--text-body-font-size);
          font-weight: var(--text-body-font-weight);
          line-height: var(--text-body-line-height);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
        .uui-dialog__close-icon {
          position: relative;
          float: right;
          width: var(--uui-dialog-close-icon-size, --dialog-close-icon-size);
          height: var(--uui-dialog-close-icon-size, --dialog-close-icon-size);
          cursor: pointer;
        }

        :host([open]) #container {
          pointer-events: auto;
        }
        :host([open]) #container::before {
          opacity: 1;
        }
        :host([open]) #overlay {
          opacity: 1;
          transform: none;
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <div id="container">
        <div id="overlay" class="vertical layout">
          <div class="uui-dialog__wrapper">
            <div @click="${this.handleClose}" class="uui-dialog__close-trigger">
              <svg
                class="uui-dialog__close-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
              >
                <defs>
                  <style>
                    .cls-1,
                    .cls-3 {
                      fill: #fff;
                    }
                    .cls-2 {
                      fill: #2e2e2e;
                    }
                    .cls-3 {
                      stroke: #2e2e2e;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    }
                  </style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <circle class="cls-1" cx="14" cy="14" r="13.5" />
                    <path
                      class="cls-2"
                      d="M14,1A13,13,0,1,1,1,14,13,13,0,0,1,14,1m0-1A14,14,0,1,0,28,14,14,14,0,0,0,14,0Z"
                    />
                    <line
                      class="cls-3"
                      x1="7.91"
                      y1="20.09"
                      x2="20.09"
                      y2="7.91"
                    />
                    <line
                      class="cls-3"
                      x1="20.09"
                      y1="20.09"
                      x2="7.91"
                      y2="7.91"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  handleClose() {
    this.open = false;
  }
}
