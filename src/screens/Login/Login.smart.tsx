import React from 'react';
import {LoginLayout} from './Login.dumb';

export const Login = () => {
  const handleLogin = () => {
    console.log('LOGIN');
  };

  const handleExit = () => {
    console.log('EXIT');
  };

  return <LoginLayout onExit={handleExit} onLogin={handleLogin} />;
};
