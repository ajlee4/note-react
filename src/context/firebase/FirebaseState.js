import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, REMOVE_NOTE } from "../types";

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const addNote = title => {
    const note = {
      title,
      date: new Date().toLocaleDateString()
    };

    const payload = {
      ...note,
      id: Date.now()
    };

    dispatch({ type: ADD_NOTE, payload });
  };

  const removeNote = id => {
    dispatch({
      type: REMOVE_NOTE,
      payload: id
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
