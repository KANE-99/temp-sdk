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

// src/visualBuilder/components/icons/index.tsx
var icons_exports = {};
__export(icons_exports, {
  AddCommentIcon: () => AddCommentIcon,
  CaretIcon: () => CaretIcon,
  DeleteIcon: () => DeleteIcon,
  EditIcon: () => EditIcon,
  FormIcon: () => FormIcon,
  HighlightCommentIcon: () => HighlightCommentIcon,
  InfoIcon: () => InfoIcon,
  MoveLeftIcon: () => MoveLeftIcon,
  MoveRightIcon: () => MoveRightIcon,
  PlusIcon: () => PlusIcon,
  ReadCommentIcon: () => ReadCommentIcon,
  ReplaceAssetIcon: () => ReplaceAssetIcon,
  WarningOctagonIcon: () => WarningOctagonIcon
});
module.exports = __toCommonJS(icons_exports);
var import_jsx_runtime = require("preact/jsx-runtime");
var generateIconStyles = ({ disabled = false }) => ({
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? "not-allowed" : "pointer"
});
function CaretIcon({ open = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      "data-testid": "visual-builder__caret-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { transform: open ? "rotate(180deg)" : "rotate(0deg)" },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M2.73483 5.73483C2.88128 5.58839 3.11872 5.58839 3.26517 5.73483L8 10.4697L12.7348 5.73483C12.8813 5.58839 13.1187 5.58839 13.2652 5.73483C13.4116 5.88128 13.4116 6.11872 13.2652 6.26517L8.26516 11.2652C8.11872 11.4116 7.88128 11.4116 7.73484 11.2652L2.73483 6.26517C2.58839 6.11872 2.58839 5.88128 2.73483 5.73483Z",
          fill: "white"
        }
      )
    }
  );
}
function DeleteIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      "data-testid": "visual-builder__delete-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M6.5 6.125C6.70711 6.125 6.875 6.29289 6.875 6.5V10.5C6.875 10.7071 6.70711 10.875 6.5 10.875C6.29289 10.875 6.125 10.7071 6.125 10.5V6.5C6.125 6.29289 6.29289 6.125 6.5 6.125Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M9.875 6.5C9.875 6.29289 9.70711 6.125 9.5 6.125C9.29289 6.125 9.125 6.29289 9.125 6.5V10.5C9.125 10.7071 9.29289 10.875 9.5 10.875C9.70711 10.875 9.875 10.7071 9.875 10.5V6.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M6.5 1.125C6.13533 1.125 5.78559 1.26987 5.52773 1.52773C5.26987 1.78559 5.125 2.13533 5.125 2.5V3.125H2.5C2.29289 3.125 2.125 3.29289 2.125 3.5C2.125 3.70711 2.29289 3.875 2.5 3.875H3.125V13C3.125 13.2321 3.21719 13.4546 3.38128 13.6187C3.54538 13.7828 3.76794 13.875 4 13.875H12C12.2321 13.875 12.4546 13.7828 12.6187 13.6187C12.7828 13.4546 12.875 13.2321 12.875 13V3.875H13.5C13.7071 3.875 13.875 3.70711 13.875 3.5C13.875 3.29289 13.7071 3.125 13.5 3.125H10.875V2.5C10.875 2.13533 10.7301 1.78559 10.4723 1.52773C10.2144 1.26987 9.86467 1.125 9.5 1.125H6.5ZM10.125 3.125V2.5C10.125 2.33424 10.0592 2.17527 9.94194 2.05806C9.82473 1.94085 9.66576 1.875 9.5 1.875H6.5C6.33424 1.875 6.17527 1.94085 6.05806 2.05806C5.94085 2.17527 5.875 2.33424 5.875 2.5V3.125H10.125ZM3.875 3.875V13C3.875 13.0332 3.88817 13.0649 3.91161 13.0884C3.93505 13.1118 3.96685 13.125 4 13.125H12C12.0332 13.125 12.0649 13.1118 12.0884 13.0884C12.1118 13.0649 12.125 13.0332 12.125 13V3.875H3.875Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function FormIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "17", height: "21", viewBox: "0 0 17 21", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.75223 0.900517C5.05206 0.712906 4.33237 1.12842 4.14475 1.82859L3.44577 4.43724H1.75C1.02513 4.43724 0.4375 5.02486 0.4375 5.74974V19.2497C0.4375 19.9746 1.02513 20.5622 1.75 20.5622H12.25C12.9749 20.5622 13.5625 19.9746 13.5625 19.2497V17.3922L16.8225 5.22559C17.0101 4.52542 16.5946 3.80573 15.8945 3.61812L5.75223 0.900517ZM13.5625 13.0455L15.7359 4.93442C15.7627 4.8344 15.7033 4.73158 15.6033 4.70478L5.46106 1.98718C5.36104 1.96038 5.25822 2.01974 5.23142 2.11977L4.61046 4.43724H12.25C12.9749 4.43724 13.5625 5.02486 13.5625 5.74974V13.0455ZM1.5625 5.74974C1.5625 5.64618 1.64645 5.56224 1.75 5.56224H12.25C12.3536 5.56224 12.4375 5.64618 12.4375 5.74974V19.2497C12.4375 19.3533 12.3536 19.4372 12.25 19.4372H1.75C1.64645 19.4372 1.5625 19.3533 1.5625 19.2497V5.74974Z", fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.4375 8.74974C3.4375 8.43908 3.68934 8.18724 4 8.18724H10C10.3107 8.18724 10.5625 8.43908 10.5625 8.74974C10.5625 9.0604 10.3107 9.31224 10 9.31224H4C3.68934 9.31224 3.4375 9.0604 3.4375 8.74974Z", fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.4375 11.7497C3.4375 11.4391 3.68934 11.1872 4 11.1872H10C10.3107 11.1872 10.5625 11.4391 10.5625 11.7497C10.5625 12.0604 10.3107 12.3122 10 12.3122H4C3.68934 12.3122 3.4375 12.0604 3.4375 11.7497Z", fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.4375 14.7497C3.4375 14.4391 3.68934 14.1872 4 14.1872H10C10.3107 14.1872 10.5625 14.4391 10.5625 14.7497C10.5625 15.0604 10.3107 15.3122 10 15.3122H4C3.68934 15.3122 3.4375 15.0604 3.4375 14.7497Z", fill: "currentColor" })
  ] });
}
function MoveLeftIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      "data-testid": "visual-builder__move-left-icon",
      className: props.className,
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      style: generateIconStyles(props),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.125 8C2.125 7.79289 2.29289 7.625 2.5 7.625H13.5C13.7071 7.625 13.875 7.79289 13.875 8C13.875 8.20711 13.7071 8.375 13.5 8.375H2.5C2.29289 8.375 2.125 8.20711 2.125 8Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M7.26516 3.23483C7.41161 3.38128 7.41161 3.61872 7.26516 3.76517L3.03033 8L7.26516 12.2348C7.41161 12.3813 7.41161 12.6187 7.26516 12.7652C7.11872 12.9116 6.88128 12.9116 6.73484 12.7652L2.23483 8.26516C2.08839 8.11872 2.08839 7.88128 2.23483 7.73484L6.73484 3.23483C6.88128 3.08839 7.11872 3.08839 7.26516 3.23483Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function MoveRightIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      className: props.className,
      "data-testid": "visual-builder__move-right-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      style: generateIconStyles(props),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.125 8C2.125 7.79289 2.29289 7.625 2.5 7.625H13.5C13.7071 7.625 13.875 7.79289 13.875 8C13.875 8.20711 13.7071 8.375 13.5 8.375H2.5C2.29289 8.375 2.125 8.20711 2.125 8Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8.73484 3.23483C8.88128 3.08839 9.11872 3.08839 9.26516 3.23483L13.7652 7.73484C13.9116 7.88128 13.9116 8.11872 13.7652 8.26516L9.26516 12.7652C9.11872 12.9116 8.88128 12.9116 8.73484 12.7652C8.58839 12.6187 8.58839 12.3813 8.73484 12.2348L12.9697 8L8.73484 3.76517C8.58839 3.61872 8.58839 3.38128 8.73484 3.23483Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function InfoIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      "data-testid": "visual-builder__info-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M8 5.5C7.72386 5.5 7.5 5.72386 7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6C8.5 5.72386 8.27614 5.5 8 5.5Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M8 10.875C7.79289 10.875 7.625 10.7071 7.625 10.5V7.5C7.625 7.29289 7.79289 7.125 8 7.125C8.20711 7.125 8.375 7.29289 8.375 7.5V10.5C8.375 10.7071 8.20711 10.875 8 10.875Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM13.25 8C13.25 10.8995 10.8995 13.25 8 13.25C5.10051 13.25 2.75 10.8995 2.75 8C2.75 5.10051 5.10051 2.75 8 2.75C10.8995 2.75 13.25 5.10051 13.25 8Z",
            fill: "white"
          }
        )
      ]
    }
  );
}
function EditIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      "data-testid": "visual-builder__edit-icon",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { id: "Edit", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          id: "Edit_2",
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.58347 15.3803C3.35617 15.6076 3.22019 15.9104 3.20131 16.2313L3.00244 19.6122C2.95629 20.3967 3.60524 21.0456 4.38975 20.9995L7.7706 20.8006C8.0915 20.7817 8.39431 20.6458 8.62161 20.4185L20.6176 8.4225C21.1301 7.90993 21.1301 7.07891 20.6176 6.56634L17.4356 3.38436C16.923 2.8718 16.092 2.8718 15.5794 3.38436L3.58347 15.3803ZM4.32437 16.2974C4.32707 16.2515 4.3465 16.2083 4.37897 16.1758L14.2003 6.35446L17.4954 9.64949C17.5492 9.70337 17.6113 9.74403 17.6776 9.77148L7.82611 19.623C7.79364 19.6554 7.75038 19.6749 7.70454 19.6776L4.32369 19.8764C4.21161 19.883 4.11891 19.7903 4.1255 19.6782L4.32437 16.2974ZM18.4128 9.03624L19.8221 7.627C19.8953 7.55378 19.8953 7.43506 19.8221 7.36184L16.6401 4.17986C16.5669 4.10663 16.4481 4.10663 16.3749 4.17986L14.9958 5.55897L18.2908 8.854C18.3447 8.90788 18.3854 8.96996 18.4128 9.03624Z",
          fill: "currentColor"
        }
      ) })
    }
  );
}
function PlusIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      "data-testid": "visual-builder__plus-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.4688 4.375C10.4688 4.11612 10.259 3.90625 10.0001 3.90625C9.74121 3.90625 9.53135 4.11612 9.53135 4.375V9.27307H4.37402C4.11514 9.27307 3.90527 9.48294 3.90527 9.74182C3.90527 10.0007 4.11514 10.2106 4.37402 10.2106H9.53135V15.625C9.53135 15.8839 9.74121 16.0937 10.0001 16.0937C10.259 16.0937 10.4688 15.8839 10.4688 15.625V10.2106H15.6259C15.8847 10.2106 16.0946 10.0007 16.0946 9.74182C16.0946 9.48294 15.8847 9.27307 15.6259 9.27307H10.4688V4.375Z" })
    }
  );
}
function ReplaceAssetIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "18", height: "18", viewBox: "-1 -1 20 20", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.88235 1.23529C9.88235 0.942908 10.1194 0.705882 10.4118 0.705882H14.1641C14.8463 0.705882 15.3994 1.25894 15.3994 1.94118V6.47441L17.1363 5.06006C17.363 4.87544 17.6965 4.90958 17.8811 5.1363C18.0657 5.36303 18.0316 5.69649 17.8049 5.88111L15.2042 7.99876C15.0096 8.15728 14.7303 8.15728 14.5357 7.99876L11.9351 5.88111C11.7083 5.69649 11.6742 5.36303 11.8588 5.1363C12.0434 4.90958 12.3769 4.87544 12.6036 5.06006L14.3405 6.47441V1.94118C14.3405 1.84371 14.2615 1.76471 14.1641 1.76471H10.4118C10.1194 1.76471 9.88235 1.52768 9.88235 1.23529Z", fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.11765 16.7647C8.11765 17.0571 7.88062 17.2941 7.58824 17.2941H3.83592C3.15369 17.2941 2.60063 16.7411 2.60063 16.0588V11.5256L0.863711 12.9399C0.636985 13.1246 0.303523 13.0904 0.118903 12.8637C-0.0657165 12.637 -0.0315828 12.3035 0.195144 12.1189L2.79576 10.0012C2.99043 9.84272 3.26966 9.84272 3.46433 10.0012L6.06494 12.1189C6.29167 12.3035 6.3258 12.637 6.14118 12.8637C5.95656 13.0904 5.6231 13.1246 5.39637 12.9399L3.65945 11.5256V16.0588C3.65945 16.1563 3.73846 16.2353 3.83592 16.2353H7.58824C7.88062 16.2353 8.11765 16.4723 8.11765 16.7647Z", fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.11765 1.23529C8.11765 0.55306 7.56459 0 6.88236 0H1.23531C0.553077 0 1.69415e-05 0.55306 1.69415e-05 1.23529V6.88235C1.69415e-05 7.56459 0.553076 8.11765 1.23531 8.11765H6.88236C7.56459 8.11765 8.11765 7.56459 8.11765 6.88235V1.23529ZM6.88236 1.05882C6.97982 1.05882 7.05883 1.13783 7.05883 1.23529V6.88235C7.05883 6.97982 6.97982 7.05882 6.88236 7.05882H1.23531C1.13785 7.05882 1.05884 6.97982 1.05884 6.88235V1.23529C1.05884 1.13783 1.13785 1.05882 1.23531 1.05882H6.88236Z", fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 11.1176C18 10.4354 17.4469 9.88235 16.7647 9.88235H11.1176C10.4354 9.88235 9.88235 10.4354 9.88235 11.1176V16.7647C9.88235 17.4469 10.4354 18 11.1176 18H16.7647C17.4469 18 18 17.4469 18 16.7647V11.1176ZM16.7647 10.9412C16.8622 10.9412 16.9412 11.0202 16.9412 11.1176V16.7647C16.9412 16.8622 16.8622 16.9412 16.7647 16.9412H11.1176C11.0202 16.9412 10.9412 16.8622 10.9412 16.7647V11.1176C10.9412 11.0202 11.0202 10.9412 11.1176 10.9412H16.7647Z", fill: "currentColor" })
  ] });
}
function HighlightCommentIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { filter: "url(#filter0_d_13652_461491)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "25", cy: "21", r: "21", fill: "#777777", "fill-opacity": "0.84", "shape-rendering": "crispEdges" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.4375 20C21.4375 19.6893 21.6893 19.4375 22 19.4375H28C28.3107 19.4375 28.5625 19.6893 28.5625 20C28.5625 20.3107 28.3107 20.5625 28 20.5625H22C21.6893 20.5625 21.4375 20.3107 21.4375 20Z", fill: "white" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.4375 23C21.4375 22.6893 21.6893 22.4375 22 22.4375H28C28.3107 22.4375 28.5625 22.6893 28.5625 23C28.5625 23.3107 28.3107 23.5625 28 23.5625H22C21.6893 23.5625 21.4375 23.3107 21.4375 23Z", fill: "white" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 16.25C16 15.8358 16.3358 15.5 16.75 15.5H33.25C33.6642 15.5 34 15.8358 34 16.25V27.4423C34 27.8565 33.6642 28.1923 33.25 28.1923H27.9804C27.853 28.1923 27.7343 28.257 27.6652 28.3641L25.9633 31.0042C25.6651 31.4669 24.9866 31.4613 24.696 30.9938L23.1746 28.5464C23.0378 28.3262 22.7969 28.1923 22.5377 28.1923H16.75C16.3358 28.1923 16 27.8565 16 27.4423V16.25ZM17.125 27.0673V16.625H32.875V27.0673H27.9804C27.4707 27.0673 26.9958 27.3262 26.7197 27.7546L25.3387 29.8968L24.1301 27.9524C23.7879 27.402 23.1858 27.0673 22.5377 27.0673H17.125Z", fill: "white" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "34", cy: "15", r: "4", fill: "#EB5646" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "34", cy: "15", r: "4.5", stroke: "white", "stroke-opacity": "0.6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", { id: "filter0_d_13652_461491", x: "0", y: "0", width: "50", height: "50", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", { dy: "4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_13652_461491" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_13652_461491", result: "shape" })
    ] }) })
  ] });
}
function ReadCommentIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12Z",
            fill: "#475161"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M11.25 16C11.25 15.5858 11.5858 15.25 12 15.25H20C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75H12C11.5858 16.75 11.25 16.4142 11.25 16Z",
            fill: "#475161"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M4 7C4 6.44772 4.44772 6 5 6H27C27.5523 6 28 6.44772 28 7V21.9231C28 22.4754 27.5523 22.9231 27 22.9231H19.9739C19.804 22.9231 19.6457 23.0094 19.5536 23.1522L17.2844 26.6723C16.8868 27.2892 15.9821 27.2818 15.5946 26.6584L13.5662 23.3952C13.3837 23.1016 13.0625 22.9231 12.7169 22.9231H5C4.44771 22.9231 4 22.4754 4 21.9231V7ZM5.5 21.4231V7.5H26.5V21.4231H19.9739C19.2942 21.4231 18.6611 21.7682 18.2929 22.3395L16.4516 25.1958L14.8401 22.6033C14.3839 21.8694 13.581 21.4231 12.7169 21.4231H5.5Z",
            fill: "#475161"
          }
        )
      ]
    }
  );
}
function AddCommentIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M16 10.25C16.4142 10.25 16.75 10.5858 16.75 11V13.25H19C19.4142 13.25 19.75 13.5858 19.75 14C19.75 14.4142 19.4142 14.75 19 14.75H16.75V17C16.75 17.4142 16.4142 17.75 16 17.75C15.5858 17.75 15.25 17.4142 15.25 17V14.75H13C12.5858 14.75 12.25 14.4142 12.25 14C12.25 13.5858 12.5858 13.25 13 13.25H15.25V11C15.25 10.5858 15.5858 10.25 16 10.25Z",
            fill: "#475161"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M4 7C4 6.44772 4.44772 6 5 6H27C27.5523 6 28 6.44772 28 7V21.9231C28 22.4754 27.5523 22.9231 27 22.9231H19.9739C19.804 22.9231 19.6457 23.0094 19.5536 23.1522L17.2844 26.6723C16.8868 27.2892 15.9821 27.2818 15.5946 26.6584L13.5662 23.3952C13.3837 23.1016 13.0625 22.9231 12.7169 22.9231H5C4.44771 22.9231 4 22.4754 4 21.9231V7ZM5.5 21.4231V7.5H26.5V21.4231H19.9739C19.2942 21.4231 18.6611 21.7682 18.2929 22.3395L16.4516 25.1958L14.8401 22.6033C14.3839 21.8694 13.581 21.4231 12.7169 21.4231H5.5Z",
            fill: "#475161"
          }
        )
      ]
    }
  );
}
function WarningOctagonIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8.49999 5.00389C8.71574 5.00389 8.89065 5.1788 8.89065 5.39456V9.04076C8.89065 9.25652 8.71574 9.43142 8.49999 9.43142C8.28423 9.43142 8.10932 9.25652 8.10932 9.04076V5.39456C8.10932 5.1788 8.28423 5.00389 8.49999 5.00389Z",
            fill: "#A31B00"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M8.49999 12.0359C8.85958 12.0359 9.15109 11.7443 9.15109 11.3847C9.15109 11.0252 8.85958 10.7336 8.49999 10.7336C8.14039 10.7336 7.84888 11.0252 7.84888 11.3847C7.84888 11.7443 8.14039 12.0359 8.49999 12.0359Z",
            fill: "#A31B00"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5.54062 2.26699C5.71157 2.09604 5.94343 2 6.18519 2L10.8148 2C11.0566 2 11.2884 2.09604 11.4594 2.26699L14.733 5.54062C14.904 5.71157 15 5.94343 15 6.18519L15 10.8148C15 11.0566 14.904 11.2884 14.733 11.4594L11.4594 14.733C11.2884 14.904 11.0566 15 10.8148 15L6.18519 15C5.94343 15 5.71157 14.904 5.54062 14.733L2.26699 11.4594C2.09604 11.2884 2 11.0566 2 10.8148L2 6.18519C2 5.94343 2.09604 5.71157 2.26699 5.54062L5.54062 2.26699ZM6.18519 2.78133C6.15065 2.78133 6.11753 2.79505 6.09311 2.81947L2.81947 6.09311C2.79505 6.11753 2.78133 6.15065 2.78133 6.18519V10.8148C2.78133 10.8493 2.79505 10.8825 2.81947 10.9069L6.09311 14.1805C6.11753 14.205 6.15065 14.2187 6.18519 14.2187H10.8148C10.8493 14.2187 10.8825 14.205 10.9069 14.1805L14.1805 10.9069C14.205 10.8825 14.2187 10.8493 14.2187 10.8148V6.18519C14.2187 6.15065 14.205 6.11753 14.1805 6.09311L10.9069 2.81947C10.8825 2.79505 10.8493 2.78133 10.8148 2.78133L6.18519 2.78133Z",
            fill: "#A31B00"
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddCommentIcon,
  CaretIcon,
  DeleteIcon,
  EditIcon,
  FormIcon,
  HighlightCommentIcon,
  InfoIcon,
  MoveLeftIcon,
  MoveRightIcon,
  PlusIcon,
  ReadCommentIcon,
  ReplaceAssetIcon,
  WarningOctagonIcon
});
//# sourceMappingURL=index.cjs.map