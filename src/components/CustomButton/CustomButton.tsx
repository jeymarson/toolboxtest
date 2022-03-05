import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {BLACK, GRAY, WHITE} from '@constants/colors';

import {styles as buttonStyles} from './styles';

type CustomButtonProps = {
  color?: string;
  textColor?: string;
  label: string;
  onPress: () => void;
  styles?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
  testId?: string;
};

export const CustomButton = ({
  label,
  onPress,
  styles,
  color = BLACK,
  textColor = WHITE,
  disabled = false,
  loading = false,
  testId = 'default-custom-button-id',
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => !disabled && onPress()}
      style={[
        buttonStyles.container,
        {backgroundColor: disabled ? GRAY : color},
        styles,
      ]}
      testID={testId}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[buttonStyles.label, {color: textColor}]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
