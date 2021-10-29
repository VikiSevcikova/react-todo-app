import React, { useReducer } from "react";

export const AppContext = React.createContext();

const initialState = {
  alert: {isVisible: false, message: ""},
  modal: {isOpen: false},
  mode: "light"
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
    case "CHANGE_MODE":
      return {
        ...appState,
        mode: appState.mode === "light" ? "dark" : "light"
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
