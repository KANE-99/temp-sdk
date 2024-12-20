"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/visualBuilder/components/icons/variant.tsx
var variant_exports = {};
__export(variant_exports, {
  VariantIcon: () => VariantIcon
});
module.exports = __toCommonJS(variant_exports);
var import_jsx_runtime = require("preact/jsx-runtime");
function VariantIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M4.41131 0.157165C4.34585 0.0589769 4.23565 0 4.11765 0C3.99964 0 3.88944 0.0589769 3.82398 0.157165L0.0592764 5.80422C-0.0197588 5.92278 -0.0197588 6.07722 0.0592764 6.19578L3.82398 11.8428C3.88944 11.941 3.99964 12 4.11765 12C4.23565 12 4.34585 11.941 4.41131 11.8428L6 9.4598L7.58869 11.8428C7.65415 11.941 7.76435 12 7.88235 12C8.00036 12 8.11056 11.941 8.17602 11.8428L11.9407 6.19578C12.0198 6.07722 12.0198 5.92278 11.9407 5.80422L8.17602 0.157165C8.11056 0.0589769 8.00036 0 7.88235 0C7.76435 0 7.65415 0.0589769 7.58869 0.157165L6 2.5402L4.41131 0.157165ZM5.57582 3.17647L4.11765 0.989215L0.777124 6L4.11765 11.0108L5.57582 8.82353L3.82398 6.19578C3.74495 6.07722 3.74495 5.92278 3.82398 5.80422L5.57582 3.17647ZM6 8.18726L4.54183 6L6 3.81274L7.45817 6L6 8.18726ZM6.42418 8.82353L8.17602 6.19578C8.25505 6.07722 8.25505 5.92278 8.17602 5.80422L6.42418 3.17647L7.88235 0.989215L11.2229 6L7.88235 11.0108L6.42418 8.82353Z",
          fill: "white"
        }
      )
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VariantIcon
});
//# sourceMappingURL=variant.cjs.map