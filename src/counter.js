import React from "react";
import { useStore, useDispatch } from "./store-provider";

export default function Counter() {
  const { state, dispatch } = useStore();

  return (
    <section className="counter">
      <div className="count">{state.counter}</div>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "COUNTER_INC" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "COUNTER_DEC" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "COUNTER_RESET" })}>
          Reset
        </button>
      </div>
    </section>
  );
}
