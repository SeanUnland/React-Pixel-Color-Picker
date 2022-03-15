import React from "react";
import useStyles from "./ColorPicker.styles";

function ColorPicker({ currentColor, onSetColor }) {
  const classes = useStyles();

  const colorChange = (event) => {
    console.log(event.target.value);
    onSetColor(event.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={currentColor}
        className={classes.colorPicker}
        onChange={colorChange}
      />
    </div>
  );
}

export default ColorPicker;
