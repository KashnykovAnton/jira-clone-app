import chroma from "chroma-js";
import colors from "../colors";

const generateColor = (mainColor) => {
  let hueShift = 0;
  const step = 137;

  return () => {
    hueShift = (hueShift + step) % 360;
    console.log("hueShift: ", hueShift);
    const newColor = chroma(mainColor).set("hsl.h", `+${hueShift}`).hex();
    return newColor;
  };
};

const mainColor = colors.chipStartColor;
const getNextColor = generateColor(mainColor);

export default getNextColor;
