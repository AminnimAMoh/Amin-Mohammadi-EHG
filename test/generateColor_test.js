const expect = require("chai").expect;
const ColourGenerator = require("../JSsrc/Executives/GenerateColours").ColourGenerator;

describe("Generate Colour", () => {
  const testObject = new ColourGenerator().generateColours();
  it("Should correctly report return array length is 32768 from generateColour class constructor function.", () => {
    expect(testObject.length).to.be.equal(32768);
  });
  it("Should correctly report return array second object blue value is 8", () => {
    expect(testObject[1].blue).to.be.equal(8);
  });
  it("Should correctly report return array is incremented by 8 by checking first 6 blue values to be equal [0, 8, 16, 24, 32, 40]", () => {
    const blues = [
      testObject[0].blue,
      testObject[1].blue,
      testObject[2].blue,
      testObject[3].blue,
      testObject[4].blue,
      testObject[5].blue,
    ];
    expect(blues).to.have.deep.members([0, 8, 16, 24, 32, 40]);
  });
  it("Should correctly report return array last blue key value is NOT 265 as it is out of scope", () => {
    const blues = testObject[32];
    //As the colours are between 0-255 the for loop will reset reaching 256.
    expect(blues).to.not.be.equal(0);
  });
});

describe("Sort Colours", () => {
  const testObject = new ColourGenerator();
  const args = [
    {
      red: 8,
      green: 32,
      blue: 0,
      average: 13.33,
    },
    {
      red: 0,
      green: 128,
      blue: 16,
      average: 48,
    },
    {
      red: 16,
      green: 0,
      blue: 128,
      average: 48,
    },
  ];

  it("Should correctly report function return a sorted array described in responce.", () => {
    const responce = [
      {
        red: 0,
        green: 128,
        blue: 16,
        average: 48,
      },
      {
        red: 16,
        green: 0,
        blue: 128,
        average: 48,
      },
      {
        red: 8,
        green: 32,
        blue: 0,
        average: 13.33,
      },
    ];
    expect(testObject.sortColours(args)).to.have.deep.members(responce);
  })
});
