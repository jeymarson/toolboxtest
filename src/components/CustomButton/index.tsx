import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';

import {styles} from './styles';

type CustomButtonProps = {
  color?: 'black' | 'white';
  label: string;
  onPress: () => void;
  styles: ViewStyle;
};

const CustomButton = ({label, onPress}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles]}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
