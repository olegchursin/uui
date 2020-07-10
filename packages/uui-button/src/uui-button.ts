import {
  css,
  CSSResultArray,
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import { UuiColors, UuiTypography } from 'uui-common';

const defaultButtonTheme = css`
  * {
    --button-active: var(--teal-active);
    --button-background: var(--teal);
    --button-hover: var(--teal-hover);
    --button-text: var(--white);
    --button-prominent-background: var(--blue);
    --button-prominent-hover: var(--blue-hover);
    --button-prominent-active: var(--blue-active);
    --button-subtle-background: none;
    --button-subtle-text: var(--blue);
    --button-subtle-hover: var(--blue-hover);
    --button-subtle-hover-text: var(--white);
    --button-subtle-active: var(--blue-active);
    --button-ghost-background: none;
    --button-ghost-text: var(--blue);
    --button-ghost-hover: var(--gray-g);
    --button-ghost-hover-text: var(--blue-hover);
    --button-ghost-active: var(--gray-f);
    --button-ghost-text-active: var(--blue-active);
  }
`;

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <uui-button> as an HTML tag.
 */
@customElement('uui-button')
export class UuiButton extends LitElement {
  textNode: HTMLElement;
  static get styles(): CSSResultArray {
    return [
      UuiColors,
      UuiTypography,
      defaultButtonTheme,
      css`
        :host {
          display: inline-block;
        }
        button {
          height: 44px;
          padding: 12px;
          border: none;
          border-radius: 4px;
          min-width: 130px;
          color: var(--button-text);
          background-color: var(--button-background);
          font-family: var(--text-font-family);
          font-size: var(--text-body-sm-font-size);
          font-weight: var(--text-body-sm-font-weight);
          line-height: var(--text-body-sm-line-height);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        button:hover {
          cursor: pointer;
          background-color: var(--button-hover);
        }
        button:active {
          background-color: var(--button-active);
        }
        :host:disabled,
        button:disabled {
          opacity: 0.5;
        }
        button:disabled:hover {
          background-color: var(--button-background);
        }
        button.subtle:disabled:hover {
          background-color: var(--button-subtle-background);
          color: var(--button-subtle-text);
        }
        button.ghost:disabled:hover {
          background-color: var(--button-ghost-background);
        }
        button.prominent:disabled:hover {
          background-color: var(--button-prominent-background);
        }
        button.prominent {
          background-color: var(--button-prominent-background);
        }
        button.prominent:hover {
          background-color: var(--button-prominent-hover);
        }
        button.prominent:active {
          background-color: var(--button-prominent-active);
        }
        button.subtle {
          border: 1px solid var(--button-subtle-text);
          background: var(--button-subtle-background);
          color: var(--button-subtle-text);
        }
        button.subtle:hover {
          background-color: var(--button-subtle-hover);
          color: var(--button-subtle-hover-text);
        }
        button.subtle:active {
          background-color: var(--button-subtle-active);
        }
        button.ghost {
          min-width: 0;
          padding-left: 16px;
          padding-right: 16px;
          background: var(--button-ghost-background);
          border: none;
          color: var(--button-ghost-text);
          text-decoration: underline;
        }
        button.ghost:hover {
          background-color: var(--button-ghost-hover);
          color: var(--button-ghost-hover-text);
        }
        button.ghost:active {
          background-color: var(--button-ghost-active);
        }
      `
    ];
  }

  /**
   * Create an observed property. Triggers update on change.
   */
  @property({ type: String })
  title = '';

  _label = '';
  set label(label: string) {
    this._label = label;
    this.textNode.textContent = label;
  }

  get label() {
    return this._label;
  }

  @property({
    type: Boolean
  })
  disabled = false;

  @property({ type: Boolean })
  prominent = false;

  @property({
    type: Boolean
  })
  ghost = false;

  @property({
    type: Boolean
  })
  subtle = false;

  constructor() {
    super();
    this.textNode = Array.prototype.find.call(
      this.childNodes,
      (a: HTMLElement) => a.nodeType === 3
    );
    this.label = this.label || this.textNode.textContent || '';
  }

  connectedCallback() {
    super.connectedCallback();
    // This prevents external event handlers from
    // firing on disabled buttons.
    if (this.shadowRoot) {
      this.shadowRoot.addEventListener(
        'click',
        e => {
          if (this.disabled) {
            e.stopImmediatePropagation();
          }
        },
        true
      );
    }
  }

  protected render() {
    let additionalClasses = '';
    if (this.prominent) {
      additionalClasses = `prominent ${additionalClasses}`;
    } else if (this.subtle) {
      additionalClasses = `subtle ${additionalClasses}`;
    } else if (this.ghost) {
      additionalClasses = `ghost ${additionalClasses}`;
    }
    return html`
      <button class="${additionalClasses}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
