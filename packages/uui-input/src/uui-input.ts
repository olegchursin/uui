import {
  css,
  CSSResultArray,
  customElement,
  html,
  LitElement,
  property,
  query,
  TemplateResult
} from 'lit-element';
import { fire, UuiColors, UuiDefaults, UuiTypography } from 'uui-common';

const genID = () => {
  return Math.random()
    .toString(16)
    .slice(2);
};

const defaultInputTheme = css`
  * {
    --input-default-font-size: var(--text-body-sm-font-size);
    --input-line-height: var(--text-body-sm-line-height);
    --input-default-color: var(--gray-a);
    --input-error-color: var(--error);
    --input-placeholder-color: var(--gray-e);
    --input-action-color: var(--teal);
    --input-padding-default: var(--padding-default);
    --input-padding-focus: var(--padding-active);
  }
`;

@customElement('uui-input')
export class UuiInput extends LitElement {
  // Common
  @property({ type: Boolean }) error = false;
  @property({ type: String }) errorMessage = '';
  @property({ type: String }) description = '';

  // Input field
  @property({ type: String }) autocomplete = '';
  @property({ type: Boolean }) autofocus = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) id = genID();
  @property({ type: Number }) min?: number;
  @property({ type: Number }) max?: number;
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;
  @property({ type: String }) name?: string;
  @property({ type: String }) placeholder = '';
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Number }) size?: number;
  @property({ type: Number }) step?: number;
  @property({ type: String }) type = 'text';

  // Label
  @property({ type: String }) label = 'Label';

  @query('input') private textInput?: HTMLInputElement;
  private pendingValue?: string;

  static get styles(): CSSResultArray {
    return [
      UuiColors,
      UuiDefaults,
      UuiTypography,
      defaultInputTheme,
      css`
        :host([disabled]) {
          opacity: var(--opacity-50);
          cursor: default;
          pointer-events: none;
        }
        .uui-input_text {
          font-family: var(--text-font-family);
          font-size: var(--input-default-font-size);
          line-height: var(--input-line-height);
          color: var(--input-default-color);
        }
        input {
          display: block;
          width: var(--width-default);
          box-sizing: border-box;
          font-weight: var(--text-body-sm-font-weight);
          background-color: none;
          height: var(--height-default);
          border: var(--border-width-default) solid var(--input-default-color);
          border-radius: var(--border-radius-default);
          padding: var(--input-padding-default);
          margin: 8px 0 var(--spacing-default);
        }
        input:hover {
          border: var(--border-width-active) solid var(--input-action-color);
          padding: var(--input-padding-focus);
        }
        input:focus {
          border: var(--border-width-default) solid var(--input-action-color);
          padding: var(--input-padding-default);
        }
        input:disabled {
          opacity: var(--opacity-50);
        }
        input::placeholder {
          color: var(--input-placeholder-color);
        }
        label {
          font-weight: var(--text-body-font-weight-bold);
          color: var(--input-default-color);
        }
        label.disabled {
          opacity: var(--opacity-50);
        }
        input.error {
          border: var(--border-width-active) solid var(--input-error-color);
        }
        input.error:hover {
          padding: var(--input-padding-default);
        }
        label.error {
          color: var(--input-error-color);
        }
        .error-message {
          display: none;
          background-color: rgba(var(--error-rgb), var(--opacity-20));
          border-radius: var(--border-radius-default);
          padding: var(--input-padding-default);
          margin: 4px 0 8px;
        }
        .error-message.error {
          display: flex;
          align-items: center;
        }
        .error-message svg {
          display: inline-block;
          height: 24px;
          margin-right: 12px;
        }
        .description {
          display: none;
        }
        .description.active {
          display: block;
          color: var(--gray-c);
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <label
        class="uui-input_text ${this.disabled ? 'disabled' : ''} ${this.error
          ? 'error'
          : ''}"
        for="${this.id}"
        >${this.label}</label
      >
      <div
        id="${this.id}__error-description"
        class="uui-input_text description ${this.description ? 'active' : ''}"
      >
        ${this.description}
      </div>
      <div
        id="${this.id}__error-message"
        class="uui-input_text error-message ${this.error && this.errorMessage
          ? 'error'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.58 26.01">
          <defs>
            <style>
              .uui-error {
                fill: #bf4c4a;
              }
            </style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="uui-error"
                d="M29.36,23.57,16.2.81a1.63,1.63,0,0,0-2.82,0L.22,23.57A1.63,1.63,0,0,0,1.63,26H28A1.63,1.63,0,0,0,29.36,23.57Zm-2.66.85H2.88a.86.86,0,0,1-.75-1.27L14,2a.86.86,0,0,1,1.49,0L27.44,23.15A.85.85,0,0,1,26.7,24.42Z"
              />
              <circle class="uui-error" cx="14.78" cy="21.56" r="1" />
              <rect
                class="uui-error"
                x="13.8"
                y="5.99"
                width="2"
                height="13"
                rx="0.66"
              />
            </g>
          </g>
        </svg>
        ${this.errorMessage}
      </div>
      <input
        class="uui-input_text ${this.error ? 'error' : ''}"
        id="${this.id}"
        name="${this.name}"
        type="${this.type}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        autocomplete="${this.autocomplete}"
        ?autofocus="${this.autofocus}"
        minlength="${this.minlength}"
        maxlength="${this.maxlength}"
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?readonly="${this.readonly}"
        size="${this.size}"
        @change="${this.refire}"
        @input="${this.refire}"
      />
    `;
  }

  get input(): HTMLInputElement | undefined {
    return this.textInput;
  }

  get value(): string {
    const input = this.input;
    return (input && input.value) || '';
  }

  set value(v: string) {
    if (this.shadowRoot) {
      const input = this.input;
      if (input) {
        input.value = v;
      }
    } else {
      this.pendingValue = v;
    }
  }

  firstUpdated() {
    this.value =
      this.pendingValue || this.value || this.getAttribute('value') || '';
    delete this.pendingValue;
  }

  private refire(event: Event) {
    event.stopPropagation();

    const fireEventProps = {
      element: this,
      customEventName: event.type,
      detail: { sourceEvent: event }
    };
    fire(fireEventProps);
  }
}
