import { Children, createContext, useContext, useReducer } from "react";
import { provider } from "immer";

const name_ = {
  IS_AUTH: "isAuth",
};

const { IS_AUTH } = name_;

const App_context = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case IS_AUTH:
      state.isAuth = action.payload;
      return;
    default:
      throw new Error("Unexpected behavior happen: ", action.type);
  }
};
const Provider = ({ children, name_ }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
  });

  console.log(name_);

  return (
    <App_context.Provider value={{ state, dispatch, name_ }}>
      {children}
    </App_context.Provider>
  );
};

const Context = () => {
  return useContext(App_context);
};

export { Provider, Context };
