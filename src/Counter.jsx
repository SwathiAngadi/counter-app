import React from "react";
import { useState } from "react";
import clsx from "clsx";
import AnimatedNumbers from "react-animated-numbers";
import { useSpring, animated } from "react-spring";

export default function Counter() {
 
  const [count, setCount] = useState(0);
  const [maxLimit, setMaxLimit] = useState(100);
  const [incrementCount, setIncremntCount] = useState(1);
  const [isError, setIsError] = useState(false);

  const props = useSpring({ number: count, from: { number: 0 } });

  function minus() {
    const newVal = count - incrementCount;
    setCount(newVal);
    setIsError(newVal > maxLimit ? true : false);
  }

  function add() {
    const newVal = count + incrementCount;
    setCount((prev) => {
      setIsError(newVal > maxLimit ? true : false);
      return maxLimit >= newVal ? newVal : prev;
    });
  }

  function handleClick(event) {
    const value = event.target.value;
    if (event.target.name === "maxLimit") {
      setMaxLimit(Number(value));
    } else {
      setIncremntCount(Number(value));
    }
  }
  return (
    <>
      <h2> Click Counter </h2>
      <form className="entryDiv">
        <label>
          Max Limit
          <input
            className="maxLimit"
            name="maxLimit"
            type="input"
            onChange={handleClick}
          />
        </label>
        <label>
          Step Count
          <input
            className="step"
            name="step"
            type="input"
            onChange={handleClick}
          />
        </label>
      </form>

      <div className="counter">
        <button className="decBtn" onClick={minus} disabled={count < 1}>
          -
        </button>
        <h2 className="displayValue">
      
<animated.h2>{props.number.to((n) => n.toFixed(0))}</animated.h2>
         {/* <AnimatedNumbers
             transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
            animateToNumber={count}
            fontStyle={{
              fontSize: 40,
              color: "red",
            }}
          />  */}
        </h2>
        <button className="incBtn" onClick={add}>
          +
        </button>
      </div>

      <div className={clsx({ errorMsg: isError, hide: !isError })}>
        Max limit reached
      </div>

      <button className="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}
