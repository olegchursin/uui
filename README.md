# United UI

Collection of web components (lit-element) for faster web development.

## Dev

Stroybook serves compiled `*.js` files from respectful package `./lib` folders.
To enable live reload, run `npm run watch` within the package you are currently working on.

- Bootstrap

```sh
npm run bootstrap
```

- Compile

```sh
npm run tsc
```

- Enable live reload for the package you are working on. From withtin specific package folder, run:

```sh
npm run watch
```

e.g. ~/united-ui/packages/uui-button >> `npm run watch`

- Start Storybook

```sh
npm run storybook
```

- Serve (deprecated)

```sh
npm run dev
```

Navigate to `http://127.0.0.1:8000/demo/index.html` to see rendered components.

## Storybook

- Start

```sh
npm run storybook
```

- Build

```sh
npm run storybook:build
```

## Local usage

- Create a symlink in a source package directory (like `united-ui`) with `npm link`. Link is created in `/usr/local/lib/node_modules/united-ui`.
- Type `npm link united-ui` in a package that depends on the `united-ui`. This will add a symlink in its node_modules directory.
