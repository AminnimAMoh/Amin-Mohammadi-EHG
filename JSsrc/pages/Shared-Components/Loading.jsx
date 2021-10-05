"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Loading() {
    return (<div className="Loading">
      <div className="Loading_container">
        <span className="Loading_container-elements"/>
        <span className="Loading_container-elements"/>
        <span className="Loading_container-elements"/>
      </div>
    </div>);
}
exports.default = Loading;
