import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {CustomButton} from '@components/CustomButton';

import {styles} from './styles';

type LoginContainerProps = {
  onLogin: () => void;
  onExit: () => void;
};

export const LoginLayout = ({onLogin, onExit}: LoginContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TOOLBOX</Text>
      <CustomButton
        styles={styles.signInButton}
        label="Ingresar"
        onPress={onLogin}
      />
      <CustomButton label="Salir" onPress={onExit} />
      <Text style={styles.footer}>Test</Text>
    </SafeAreaView>
  );
};
