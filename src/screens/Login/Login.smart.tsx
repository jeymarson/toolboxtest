import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {LoginResponse} from '@models/loginModels';
import {RootStackParamList} from '@config/router';
import {login as loginService, addAuthHeader} from '@services/authService';

import {LoginLayout} from './Login.dumb';
import {AxiosResponse} from 'axios';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      const loginResponse: AxiosResponse<LoginResponse> = await loginService({
        sub: 'ToolboxMobileTest',
      });
      addAuthHeader(loginResponse.data.type, loginResponse.data.token);
      setLoading(false);
      navigation.replace('Home');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleExit = () => {
    console.log('EXIT');
  };

  return (
    <LoginLayout onExit={handleExit} onLogin={handleLogin} loading={loading} />
  );
};
