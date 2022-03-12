import { createContext, useReducer, useContext } from "react";
import * as actions from "./alertActions";

// initial state is empty alerts
const INITIAL_STATE = { alerts: [] };

// create an Alert State context
const AlertStateContext = createContext();
// create an Alert Dispatch context
const AlertDispatchContext = createContext(() => {
  throw new Error("Component not in context.");
});

// reducer to handle all Alert actions to update the Alert state
const AlertReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ALERT: {
      return { ...state, alerts: [...state.alerts, action.alert] };
    }
    case actions.DELETE_ALERT: {
      const newAlerts = state.alerts.filter((a) => a.id !== action.id);
      return { ...state, alerts: newAlerts };
    }

    // this should only be triggered during development
    default: {
      throw new Error("Alert action not supported.");
    }
  }
};

// create a Provider for the Alert context to wrap application so any component
// can use and update to Alert state
export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, INITIAL_STATE);

  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  );
};

// used to display Alert state
export const useAlertStateContext = () => useContext(AlertStateContext);
// used to update Alert state
export const useAlertDispatchContext = () => useContext(AlertDispatchContext);
