import React, {useState} from 'react';
import {AxiosResponse} from 'axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {LoginResponse} from '@models/loginModels';
import {RootStackParamList} from '@config/router';
import {login as loginService, addAuthHeader} from '@services/authService';

import {LoginLayout} from './Login.dumb';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
      setError('Ha ocurrido un error al iniciar sesión');
      console.log(error);
    }
  };

  return (
    <LoginLayout
      onLogin={handleLogin}
      loading={loading}
      error={error}
      setError={setError}
    />
  );
};
