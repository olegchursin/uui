import { css } from 'lit-element';

export const UuiColors = css`
  * {
    --blue: #012774;
    --blue-hover: #0138a7;
    --blue-active: #011e5b;
    --midnight: #001135;
    --teal: #007faa;
    --teal-hover: #00a5dd;
    --teal-active: #005977;
    --bright-blue: #4cbaeb;
    --gray-a: #2e2e2e;
    --gray-a-hover: #545454;
    --gray-a-active: #141414;
    --gray-b: #4c4d4f;
    --gray-c: #696969;
    --gray-c-hover: #8f8f8f;
    --gray-c-active: #5c5c5c;
    --gray-d: #9b9b9b;
    --gray-e: #c0c0c0;
    --gray-f: #e4e4e4;
    --gray-g: #f8f8f8;
    --error: #bf4c4a;
    --warning: #f0a800;
    --success: #7ab800;
    --error-rgb: 191, 76, 74;
    --warning-rgb: 240, 168, 0;
    --success-rgb: 122, 184, 0;
    --white: #fff;
    --opacity-50: 0.5;
    --opacity-20: 0.2;
  }
`;

export const UuiTypography = css`
  * {
    --text-font-family: 'Roboto', sans-serif;
    --text-body-font-size: 18px;
    --text-body-font-weight: 300;
    --text-body-line-height: 28px;
    --text-body-font-weight-bold: 700;
    --text-body-sm-font-size: 16px;
    --text-body-sm-line-height: 20px;
    --text-body-sm-font-weight: 400;
  }
`;

export const UuiDefaults = css`
  * {
    --width-default: 100%;
    --height-default: 44px;
    --spacing-default: 20px;
    --spacing-default-2x: 40px;
    --padding-default: 10px 12px;
    --padding-active: 9px 11px;
    --border-radius-default: 4px;
    --border-width-default: 1px;
    --border-width-active: 2px;
  }
`;

export const h2 = css`
  h2 {
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 20px;
  }
`;
