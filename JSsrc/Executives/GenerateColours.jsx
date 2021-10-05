"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColourGenerator = void 0;
class ColourGenerator {
    constructor() {
        this.colors = [];
        this.run = () => {
            return this.sortColours();
        };
        this.generateColours = () => {
            //This nested loop is my solution to avoid duplication in the array.
            //Because for each iteration at list one value will change we can make sure there will not be any duplications
            //in the array.
            //Considering that this nested loop just runs at the first page I think the time complexity is forgivable.
            const increment = Math.round(255 / 32);
            for (let r = 0; r < 255; r += increment) {
                for (let g = 0; g < 255; g += increment) {
                    for (let b = 0; b < 255; b += increment) {
                        //Calculating the average of the colour generated for soring.
                        const average = (r + g + b) / 3;
                        const color = {
                            red: Math.round(r),
                            green: Math.round(g),
                            blue: Math.round(b),
                            average: average,
                        };
                        this.colors.push(color);
                    }
                }
            }
            return this.colors;
        };
        this.sortColours = (args = null) => {
            //In line 38 I have formed this condition as I wanted to send a controlled array of colours 
            //to this function and test it with a predicted response.
            //So line 38 is condition-based for unit testing.
            const colorsGenerated = args ? args : this.generateColours();
            this.colors = colorsGenerated.sort((a, b) => a.average - b.average);
            return this.colors;
        };
    }
}
exports.ColourGenerator = ColourGenerator;
