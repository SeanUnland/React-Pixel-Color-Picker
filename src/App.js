import "./App.css";
import "./index.css";
import React, { useState, useMemo } from "react";
import useStyles from "./App.styles.js";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";

const offCell = {
  on: false,
  color: "#00000",
};

const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const classes = useStyles();

  // sends the color picker color to the ColorPicker component and the current color to the Grid component
  const [currentColor, setCurrentColor] = useState("#56BC58");

  const [cells, setCells] = useState(initialCells);

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );

  const chatString = useMemo(
    () => cells.map((cell) => cell.color.slice(1)).join(","),
    [cells]
  );

  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          ></div>
        ))}
      </div>
      <Grid currentColor={currentColor} cells={cells} setCells={setCells} />
      <p className={classes.chatString}>{chatString}</p>
    </div>
  );
}

export default App;
