import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInPage } from '../../actions/signin';
import Button from '../../components/Button';
import Input from '../../components/Input';
import style from './view.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const checkError = () => {
    if (error) {
      setError('');
    }
  }
  const handleChangeEmail = useCallback((event) => {
    checkError();
    setEmail(event.target.value);
  }, [setEmail, checkError]);

  const handleChangePassword = useCallback((event) => {
    checkError();
    setPassword(event.target.value);
  }, [setPassword, checkError]);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const data = { email, password }
    const response = dispatch(signInPage(data));

    if (response.error) {
      setError(response.error)
    }
  }, [email, password])

  return (
    <div className={style.login}>
      <h2 className={style.title}>Sign in to your account</h2>
      <form onSubmit={onSubmit} className={style.form}>
        <Input error={error} name='email' type='text' value={email} onChange={handleChangeEmail} placeholder='Email' />
        <Input error={error} name='password' type='password' value={password} onChange={handleChangePassword} placeholder='Password' />
        <Button form>Sign in</Button>
      </form>
    </div>
  )
}

export default Login;