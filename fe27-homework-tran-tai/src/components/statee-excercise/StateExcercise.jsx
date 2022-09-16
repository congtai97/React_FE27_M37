import { useState } from "react";
import "./stateexcersice.scss";

const StateExcercise = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleReduced = () => {
    setCounter(counter - 1);
  };

  const handlReset = () => {
    setCounter(0);
  };
  return (
    <div className="stateExcersice">
      <div className="state">
        <div className="state-number">{counter}</div>
        <div className="state-bottom">
          <div className="reduced" onClick={handleReduced}>
            -
          </div>
          <div className="reset" onClick={handlReset}>
            Reset
          </div>
          <div className="increase" onClick={handleIncrease}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateExcercise;
