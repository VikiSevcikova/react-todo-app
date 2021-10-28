import React, { useEffect, useReducer } from "react";
import { getFromLocalStorage } from "../Utils";

export const AppContext = React.createContext();

const initialState = {
  alert: {isVisible: false, message: ""},
  modal: {isOpen: false}
};

const reducer = (appState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...appState,
        modal: {isOpen: true}
      };
    case "CLOSE_MODAL":
        return {
            ...appState,
            modal: {isOpen: false}
          };
    case "SHOW_ALERT":
        return {
            ...appState,
            alert: {isVisible: true, message: action.payload}
        };    
    case "HIDE_ALERT":
      return {
        ...appState,
        alert: {isVisible: false, message: ''}
    };
    default:
      return appState;
  }
};

export const AppProvider = (props) => {
  const [appState, appDispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const AppConsumer = AppContext.Consumer;
