import React, { createContext, useReducer, useContext } from "react";

const defaultState = {
  counter: 0
};

function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case "COUNTER_INC":
      return { ...state, counter: state.counter + 1 };
    case "COUNTER_DEC":
      return { ...state, counter: state.counter - 1 };
    case "COUNTER_RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

const DispatchContext = createContext(null);
const StoreContext = createContext(null);

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}

export const useDispatch = () => useContext(DispatchContext);
export const useStore = () => useContext(StoreContext);
