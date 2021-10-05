"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const GenerateColours_1 = require("../EXE/Executives/GenerateColours");
const CalculateBoxSize_1 = require("../EXE/Executives/CalculateBoxSize");
const ColourBox_1 = __importDefault(require("./Shared-Components/ColourBox"));
function App() {
    const [colours, setColours] = (0, react_1.useState)(null);
    const [canvasSize, setCanvasSize] = (0, react_1.useState)({
        width: 0,
        height: 0,
    });
    const containerQuery = (0, react_1.useRef)(null);
    //Using useEffect hook I am calling a class to generate the colours and return them in a sorted array;
    //useEffect helps to generate this class just once the first paint happens.
    (0, react_1.useEffect)(() => {
        //Run functions handle the callback chain.
        setColours(new GenerateColours_1.ColourGenerator().run());
    }, []);
    // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
    // So it will be 2c*2c=4c and to fit 6 boxes in this canvas you have to 4/6=0.666. So the width and height for perfect rectangles will be 0.666/2.
    (0, react_1.useEffect)(() => {
        let canvasWidth = 0;
        let canvasHeight = 0;
        if (colours && containerQuery.current) {
            canvasWidth = containerQuery.current.clientWidth;
            canvasHeight = containerQuery.current.clientHeight;
        }
        const args = {
            width: canvasWidth,
            height: canvasHeight,
            cellNumber: 32768,
        };
        setCanvasSize((0, CalculateBoxSize_1.calculateBoxSize)(args));
    }, [containerQuery.current]);
    return (<div className="container" ref={containerQuery}>
      {canvasSize.width &&
            (colours === null || colours === void 0 ? void 0 : colours.map((colour, index) => {
                const props = Object.assign(Object.assign(Object.assign({}, colour), canvasSize), { index });
                return <ColourBox_1.default key={index} {...props}/>;
            }))}
    </div>);
}
exports.default = App;
