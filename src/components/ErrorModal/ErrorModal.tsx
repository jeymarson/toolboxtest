import {CustomButton} from '@components/CustomButton';
import React from 'react';
import {Modal, Text, View} from 'react-native';

import {styles} from './styles';

type ErrorModalProps = {
  show: boolean;
  setShow: (value: boolean) => void;
  error: string;
  textButton?: string;
};

export const ErrorModal = ({
  error,
  show,
  setShow,
  textButton = 'Cerrar',
}: ErrorModalProps) => {
  return (
    <Modal
      visible={show && !!error}
      animationType="slide"
      transparent
      onRequestClose={() => {
        setShow(false);
      }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.errorText}>{error}</Text>
          <CustomButton label={textButton} onPress={() => setShow(false)} />
        </View>
      </View>
    </Modal>
  );
};
