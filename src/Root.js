import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch, useHistory } from 'react-router';
import Layout from './components/Layout';
import HomePage from './modules/HomePage';
import Login from './modules/Login';
import { logOutPage, auth } from './actions/signin';

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.signIn.login);

  useEffect(() => {
    if (isLogin) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [isLogin]);

  useEffect(() => {
    dispatch(auth);
  }, []);

  const logOut = useCallback(() => {
    dispatch(logOutPage);
  });

  return (
    <Layout logOut={logOut} isLogout={isLogin}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}
