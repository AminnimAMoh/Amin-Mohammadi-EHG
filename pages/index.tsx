import React, { useEffect, useState, useRef, Suspense } from "react";
import { Colour } from "../EXE/Types/GeneralTypes";
import { ColourGenerator } from "../EXE/Executives/GenerateColours";
import { calculateBoxSize } from "../EXE/Executives/CalculateBoxSize";
import ColourBox from "./Shared-Components/ColourBox"


interface CanvasDimantions {
  width: number;
  height: number;
}

function App(): React.ReactElement {
  const [colours, setColours] = useState<Colour[] | null>(null);
  const [canvasSize, setCanvasSize] = useState<CanvasDimantions>({
    width: 0,
    height: 0,
  });
  const containerQuery = useRef<HTMLDivElement>(null);

  //Using useEffect hook I am calling a class to generate the colours and return them in a sorted array;
  //useEffect helps to generate this class just once the first paint happens.
  useEffect(() => {
    //Run functions handle the ColourGenerator callback chain.
    setColours(new ColourGenerator().run());
  }, []);

  // To correctly calculate the size of each box you have to first calculate the surfacer of the canvas then divide it by the number of boxes.
  // So it will be 2c*2c=4c and to fit 6 boxes in this canvas you have to 4/6=0.666. So the width and height for perfect rectangles will be 0.666/2.
  useEffect(() => {
    let canvasWidth: number = 0;
    let canvasHeight: number = 0;
    if (colours && containerQuery.current) {
      canvasWidth = containerQuery.current.clientWidth;
      canvasHeight = containerQuery.current.clientHeight;
    }

    const args = {
      width: canvasWidth,
      height: canvasHeight,
      cellNumber: 32768,
    };
    setCanvasSize(calculateBoxSize(args));
  }, [containerQuery.current]);

  return (
    <div className="container" ref={containerQuery}>
      {canvasSize.width &&
        colours?.map((colour: Colour, index) => {
          const props = { ...colour, ...canvasSize, index };
          return <ColourBox key={index} {...props} />;
        })}
    </div>
  );
}

export default App;
