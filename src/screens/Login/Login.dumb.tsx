import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {CustomButton} from '@components/CustomButton';
import {ErrorModal} from '@components/ErrorModal';

import {styles} from './styles';

type LoginContainerProps = {
  onLogin: () => void;
  loading: boolean;
  error: string;
  setError: (error: string) => void;
};

export const LoginLayout = ({
  onLogin,
  loading,
  error,
  setError,
}: LoginContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TOOLBOX</Text>
      <CustomButton
        styles={styles.signInButton}
        label="Ingresar"
        onPress={onLogin}
        loading={loading}
        disabled={loading}
      />
      <Text style={styles.footer}>toolbox test app</Text>
      <ErrorModal show={!!error} setShow={() => setError('')} error={error} />
    </SafeAreaView>
  );
};
