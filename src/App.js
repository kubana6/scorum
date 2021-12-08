import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import store from './stores';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  )
}

export default hot(App);
