/* eslint-disable react/jsx-pascal-case */
import { createContext, useContext, useReducer } from "react";
import { produce } from "immer";

const name_ = {
  IS_AUTH: "isAuthentication",
  CONTENTS_: "BlogContents",
  TITLE_: "TheTitle",
  DESCRIPTION_: "TheDescription",
  ARRAY_OF_DB: "ContentOfArray",
};

const { IS_AUTH, CONTENTS_, TITLE_, DESCRIPTION_, ARRAY_OF_DB } = name_;

const App_context = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case IS_AUTH:
      state.isAuth = action.payload;
      return;
    case CONTENTS_:
      state.Content = action.payload;
      return;
    case TITLE_:
      state.Title = action.payload;
      return;
    case DESCRIPTION_:
      state.Description = action.payload;
      return;
    case ARRAY_OF_DB:
      state.ArrayDB = action.payload;
      return;
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
  });
  const name = name_;

  return (
    <App_context.Provider value={{ state, dispatch, name }}>
      {children}
    </App_context.Provider>
  );
};

const Context = () => {
  return useContext(App_context);
};

export { Provider, Context };
