import React from "react";
import { useContext, createContext, useReducer, useEffect } from "react";

const stateContext = createContext();
const dispatchContext = createContext();
const initState = {
  stage: 0,
  ansData: {},
  quesData: {},
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_VIEW":
      return {
        ...state,
        stage: Math.min(Math.max(state.stage + payload, 0), 10),
      };
    case "CHANGE_DATA":
      return {
        ...state,
        quesData: payload,
      };
    case "CHANGE_ANS":
      return { ...state, ansData: Object.assign({}, state.ansData, payload) };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.rudowealth.com/api/quizzs/2?with=questions.answers"
        );
        const data = await res.json();
        dispatch({ type: "CHANGE_DATA", payload: data.data.questions });
      } catch {
        dispatch({ type: "CHANGE_DATA", payload: {} });
      }
    };

    fetchData();
  }, []);

  return (
    <stateContext.Provider value={formState}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
};

const useFormContext = () => {
  return useContext(stateContext);
};

const useDispatchContext = () => {
  const dispatchAction = useContext(dispatchContext);
  const moveNext = () => dispatchAction({ type: "CHANGE_VIEW", payload: 1 });
  const movePrev = () => dispatchAction({ type: "CHANGE_VIEW", payload: -1 });
  const dispatchAns = (load) =>
    dispatchAction({ type: "CHANGE_ANS", payload: load });

  return { moveNext, movePrev, dispatchAns };
};
export default ContextProvider;
export { useFormContext, useDispatchContext };
