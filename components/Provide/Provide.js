import React from "react";
import { Provider } from "react-redux";

const Provide = ({store, children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Provide;
