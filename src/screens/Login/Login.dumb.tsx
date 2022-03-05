import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {CustomButton} from '@components/CustomButton';

import {styles} from './styles';

type LoginContainerProps = {
  onLogin: () => void;
  onExit: () => void;
  loading: boolean;
};

export const LoginLayout = ({
  onLogin,
  onExit,
  loading,
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
      <CustomButton label="Salir" onPress={onExit} disabled={loading} />
      <Text style={styles.footer}>toolbox test app</Text>
    </SafeAreaView>
  );
};
