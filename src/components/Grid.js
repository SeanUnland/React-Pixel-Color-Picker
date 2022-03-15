import React from "react";
import useStyles from "./Grid.styles";

const offCell = {
  on: false,
  color: "#00000",
};

function Grid({ currentColor, cells, setCells }) {
  //   const [cells, setCells] = useState(initialCells);

  const classes = useStyles();

  const updateCell = (i, defaultState) => (e) => {
    e.preventDefault();

    setCells(
      cells.map((cell, cellIndex) => {
        if (cellIndex === i) {
          if (defaultState) return defaultState;
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
  };

  return (
    <div className={classes.grid}>
      {cells.map((cell, i) => (
        <div
          key={i}
          style={{ background: cell.on ? cell.color : "#fffff" }}
          className={classes.cell}
          onClick={updateCell(i)}
          onContextMenu={updateCell(i, offCell)}
        ></div>
      ))}
    </div>
  );
}

export default Grid;
