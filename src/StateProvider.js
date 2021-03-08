// React Context API
import React, {createContext, useContext, useReducer} from "react";

// StateProvider Data Layer
export const StateContext = createContext();

// Wrap the App inside StateProvider to provide Data Layer functionality
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull from Data Layer
export const useStateValue = () => useContext(StateContext);
