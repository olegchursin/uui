import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const outFolder = "packages/all/dist";

function onwarn(warning) {
  if (warning.code === "THIS_IS_UNDEFINED") return;
  console.error(warning.message);
}

export default [
  {
    input: "packages/all/lib/united-ui.js",
    output: {
      file: `${outFolder}/united-ui.bundled.js`,
      format: "iife",
      name: "UnitedUI"
    },
    onwarn,
    plugins: [resolve(), terser()]
  }
];
