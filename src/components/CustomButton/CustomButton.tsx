import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';

import {BLACK, WHITE} from '@constants/colors';

import {styles as buttonStyles} from './styles';

type CustomButtonProps = {
  color?: string;
  textColor?: string;
  label: string;
  onPress: () => void;
  styles?: ViewStyle;
};

export const CustomButton = ({
  label,
  onPress,
  styles,
  color = BLACK,
  textColor = WHITE,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyles.container, {backgroundColor: color}, styles]}>
      <Text style={[buttonStyles.label, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};
