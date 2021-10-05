const expect = require("chai").expect;
const calculateCellSize = require("../JSsrc/Executives/CalculateBoxSize").calculateBoxSize;

describe("Calculate Box Size", () => {
    const args = {
        width:256,
        height: 128,
        cellNumber: 32768
    };
    it("Should correctly report function return is not 0.058 for 256px width and 0.0 for 128px height", () => {
      expect(calculateCellSize(args)).to.not.be.equal({width: 0.058, height: 0.0284});
    });
    it("Should correctly report function return is 0.390625 for 256px width and 0.1953125 for 128px height", () => {
      expect(calculateCellSize(args)).to.be.deep.equal({width: 0.390625, height: 0.1953125});
    });
  });