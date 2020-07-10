import {
  css,
  CSSResultArray,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element';
import { fire, UuiColors, UuiDefaults, UuiTypography } from 'uui-common';

interface ISelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

const genID = () => {
  return Math.random()
    .toString(16)
    .slice(2);
};

const defaultInputTheme = css`
  * {
    --select-default-font-size: var(--text-body-sm-font-size);
    --select-line-height: var(--text-body-sm-line-height);
    --select-default-color: var(--gray-a);
    --select-error-color: var(--error);
    --select-placeholder-color: var(--gray-e);
    --select-action-color: var(--teal);
    --select-padding-default: var(--padding-default);
  }
`;

@customElement('uui-select')
export class UuiInput extends LitElement {
  // Common
  @property({ type: Boolean }) error = false;
  @property({ type: String }) errorMessage = '';
  @property({ type: String }) description = '';

  // Label
  @property({ type: String }) label = 'Label';

  // Select field
  @property({ type: String }) autocomplete = '';
  @property({ type: Boolean }) autofocus = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) form?: string;
  @property({ type: String }) name?: string;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) optional = false;
  @property({ type: String }) optionalLabel? = 'Optional';

  @property({ type: String }) id = genID();
  @property({ type: String }) placeholder = '';
  @property({ type: Array }) options: ISelectOption[] = [];
  @property({ type: String }) selectedValue = '';

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
        .uui-select_text {
          font-family: var(--text-font-family);
          font-size: var(--select-default-font-size);
          line-height: var(--select-line-height);
          color: var(--select-default-color);
        }
        select {
          width: var(--width-default);
          max-width: var(--width-default);
          font-family: var(--text-font-family);
          font-size: var(--select-default-font-size);
          line-height: var(--select-line-height);
          font-weight: var(--text-body-sm-font-weight);
          color: var(--select-default-color);
          border: var(--border-width-default) solid var(--select-default-color);
          border-radius: var(--border-radius-default);
          padding: var(--select-padding-default);
          margin: 8px 0 var(--spacing-default);
        }
        .uui-select {
          display: block;
          height: var(--height-default);
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 712'%3E%3Cpath fill='%232e2e2e' d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z'/%3E%3C/svg%3E"),
            linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
          background-repeat: no-repeat, repeat;
          background-position: right 12px top 50%, 0 0;
          background-size: 0.65em auto, 100%;
          background-color: none;
        }
        .uui-select::-ms-expand {
          display: none;
        }
        .uui-select:hover {
          border: var(--border-width-active) solid var(--select-action-color);
          padding: var(--padding-active);
          background-position: right 11px top 48%, 0 0;
        }
        .uui-select:focus {
          border-color: var(--select-action-color);
        }
        .uui-select option {
          font-weight: normal;
        }
        .uui-select:disabled,
        .uui-select[aria-disabled='true'] {
          pointer-events: none;
          opacity: var(--opacity-50);
        }
        *[dir='rtl'] .uui-select,
        :root:lang(ar) .uui-select,
        :root:lang(iw) .uui-select {
          direction: rtl;
          background-position: left 12px top 50%, 0 0;
        }

        label {
          font-weight: var(--text-body-font-weight-bold);
          color: var(--select-default-color);
        }
        .uui-select.error {
          border: 2px solid var(--select-error-color);
        }
        .uui-select.error:hover {
          padding: var(--select-padding-default);
        }
        label.error {
          color: var(--select-error-color);
        }
        label.disabled {
          opacity: var(--opacity-50);
        }
        .error-message {
          display: none;
          background-color: rgba(var(--error-rgb), var(--opacity-20));
          border-radius: var(--border-radius-default);
          padding: var(--select-padding-default);
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
        .optinal-label {
          margin-top: -10px;
          font-style: italic;
        }
        .hidden {
          display: none;
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <label
        class="uui-select_text ${this.disabled ? 'disabled' : ''} ${this.error
          ? 'error'
          : ''}"
        for="${this.id}"
        >${this.label}</label
      >
      <div
        id="${this.id}__error-description"
        class="uui-select_text description ${this.description ? 'active' : ''}"
      >
        ${this.description}
      </div>
      <div
        id="${this.id}__error-message"
        class="uui-select_text error-message ${this.error && this.errorMessage
          ? 'error'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            fill="#bf4c4a"
            d="M270.2 160h35.5c3.4 0 6.1 2.8 6 6.2l-7.5 196c-.1 3.2-2.8 5.8-6 5.8h-20.5c-3.2 0-5.9-2.5-6-5.8l-7.5-196c-.1-3.4 2.6-6.2 6-6.2zM288 388c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm281.5 52L329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.8 0 60-40 41.5-72zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z"
          />
        </svg>
        ${this.errorMessage}
      </div>
      <select
        class="uui-select uui-select_text ${this.error ? 'error' : ''}"
        id="${this.id}"
        name="${this.name}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        autocomplete="${this.autocomplete}"
        ?autofocus="${this.autofocus}"
        @change="${this.refire}"
      >
        ${this.options.map(
          option => html`
            <option
              class="uui-select_text"
              value="${option.value}"
              ?selected=${this.selectedValue === option.value}
              >${option.label}</option
            >
          `
        )}
      </select>
      <div
        class="uui-select_text optinal-label ${!this.optional ? 'hidden' : ''}"
      >
        ${this.optionalLabel}
      </div>
    `;
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
