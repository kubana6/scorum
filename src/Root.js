import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout'
import HomePage from './modules/HomePage';
import store from './stores';

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Route component={''} /> */}
        <Layout>
          <HomePage />
        </Layout>
      </BrowserRouter>
    </Provider>
  );

}
