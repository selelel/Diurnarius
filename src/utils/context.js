/* eslint-disable react/jsx-pascal-case */
import { createContext, useContext, useReducer } from "react";
import { produce } from "immer";

const name_ = {
  IS_AUTH: "isAuthentication",
  CONTENTS_: "BlogContents",
  TITLE_: "TheTitle",
  DESCRIPTION_: "TheDescription",
  ARRAY_OF_DB: "ContentOfArray",
  FILE_: "MyFiles",
  PIC_: "Pictures",
  COUNT_DATE: "CountDate",
};

const {
  IS_AUTH,
  CONTENTS_,
  TITLE_,
  DESCRIPTION_,
  ARRAY_OF_DB,
  FILE_,
  PIC_,
  COUNT_DATE,
} = name_;

const App_context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, isAuth: action.payload };
    case CONTENTS_:
      return { ...state, Content: action.payload };
    case TITLE_:
      return { ...state, Title: action.payload };
    case DESCRIPTION_:
      return { ...state, Description: action.payload };
    case ARRAY_OF_DB:
      return { ...state, ArrayDB: action.payload };
    case FILE_:
      return { ...state, File: action.payload };
    case PIC_:
      return { ...state, Pic: action.payload };
    case COUNT_DATE:
      return { ...state, CountDate: action.payload };
    default:
      throw new Error("Unexpected behavior happen: ", action.type);
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    isAuth: false,
    Title: "",
    Description: "",
    Content: "",
    ArrayDB: [],
    File: null,
    Pic: "",
    CountDate: Math.floor(
      (new Date() - new Date("2023-08-29")) / (1000 * 60 * 60 * 24)
    ),
  });

  const name = name_;

  return (
    <App_context.Provider value={{ state, dispatch, name }}>
      {children}
    </App_context.Provider>
  );
};

const Context = () => {
  const contextValue = useContext(App_context);
  if (!contextValue) {
    throw new Error("Context must be used within a Provider");
  }
  return contextValue;
};

export { Provider, Context };
