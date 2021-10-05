import React, { ReactElement } from "react";

interface Props {
  red: number;
  green: number;
  blue: number;
  width: number;
  height: number;
  index: number;
}

function ColorBox({
  red,
  green,
  blue,
  width,
  height,
  index,
}: Props): ReactElement {
  //In this line I am calculating the radian for each colour in the array by dividing Two PI by the total number of colours.
  //Next step each colour will grab a specific radian using its index in the array.
  const angle = ((2 * Math.PI) / 32768) * index;

  //In this section I am calculating the position for each span to form spiral shapes around a circle.
  //In this approach I have to increment the radius of each spiral using sin/cos of the index of the colour in the array
  //that will return a number between -1 and 1. Then this number is multiplied by the desired radius of the circle.
  //This equation will form a Fibonacci sequence for the radius of the circle.
  const radius = 450 * Math.sin(index);

  //Next two lines I am calculating the exact position of the coloured element around a circle using a Parametric Equation.
  //As I have a dynamic radius in the Fibonacci sequence the spiral shape will form.
  const x = -50+radius * Math.cos(angle)*50;
  const y = -50+radius * Math.sin(angle)*50;
  return (
    <div
      className="container_colorBox"
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`,
        transform: `translate(${x}%,${y}%)`,
        width: `${width / 5}%`,
        height: `${height / 5}%`,
      }}
    />
  );
}

export default ColorBox;
