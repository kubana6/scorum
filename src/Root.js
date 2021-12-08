import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Card from './components/Card';
import Layout from './components/Layout'
import store from './stores';

export default () => {
  return (
    // <Provider store={store}>
        <BrowserRouter>
          {/* <Route component={''} /> */}
          <Layout>children
            <Card/>
          </Layout>
        </BrowserRouter>
      // </Provider> 
  );

}
