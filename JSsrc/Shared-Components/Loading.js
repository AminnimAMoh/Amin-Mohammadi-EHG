"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Loading() {
    return (react_1.default.createElement("div", { className: "Loading" },
        react_1.default.createElement("div", { className: "Loading_container" },
            react_1.default.createElement("span", { className: "Loading_container-elements" }),
            react_1.default.createElement("span", { className: "Loading_container-elements" }),
            react_1.default.createElement("span", { className: "Loading_container-elements" }))));
}
exports.default = Loading;
