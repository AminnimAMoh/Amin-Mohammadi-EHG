"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateBoxSize = void 0;
//I have generated this solution when I was cooking diner by drawing the problem on the stove. 😃
// this function helps to grasp the span elements size. 
// To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
// So it will be 2c*2c=4c and to fit 6 boxes in this canvas you have to 4/6=0.666. So the width and height for perfect rectangles will be 0.666/2.
const calculateBoxSize = ({ width, height, cellNumber }) => {
    const w = width / cellNumber / 2;
    const h = height / cellNumber / 2;
    //I timed values to 100 to be used as percentages.
    return { width: w * 100, height: h * 100 };
};
exports.calculateBoxSize = calculateBoxSize;
