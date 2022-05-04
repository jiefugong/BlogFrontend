import { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";

const initialState = {
  loggedIn: false,
  isAdmin: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] =  useReducer(appReducer, initialState);

  function userLogin(item) {
    dispatch({
      type: 'LOG_IN',
      payload: item,
    })
  };

  function userLogout(item) {
    dispatch({
      type: 'LOG_OUT',
      payload: item,
    })
  }

  return (
    <GlobalContext.Provider value = {{
      loggedIn: state.loggedIn, isAdmin: state.isAdmin, userLogin, userLogout}}>
        {children}
    </GlobalContext.Provider>
  )
}