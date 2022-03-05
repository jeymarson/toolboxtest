import React, {useState} from 'react';

import {login as loginService} from '@services/authService';

import {LoginLayout} from './Login.dumb';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      const loginResponse = await loginService({sub: 'ToolboxMobileTest'});
      console.log({data: loginResponse.data});
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleExit = () => {
    console.log('EXIT');
  };

  return (
    <LoginLayout onExit={handleExit} onLogin={handleLogin} loading={loading} />
  );
};
