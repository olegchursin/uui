export { UuiColors, UuiDefaults, UuiTypography } from './uui-styles';

interface IFireEventProps {
  readonly element: HTMLElement;
  readonly customEventName: string;
  readonly detail?: {};
  readonly bubbles?: boolean;
  readonly composed?: boolean;
}
export function fire({
  element,
  customEventName,
  detail,
  bubbles = true,
  composed = true
}: IFireEventProps) {
  if (customEventName) {
    const eventInitDict: CustomEventInit = {
      bubbles: typeof bubbles === 'boolean' ? bubbles : true,
      composed: typeof composed === 'boolean' ? composed : true
    };

    if (detail) {
      eventInitDict.detail = detail;
    }

    element.dispatchEvent(new CustomEvent(customEventName, eventInitDict));
  }
}
