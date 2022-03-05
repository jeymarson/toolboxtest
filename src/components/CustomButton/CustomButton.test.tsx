import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {CustomButton} from './CustomButton';

describe('CustomButton tests', () => {
  test('should render correctly', () => {
    const {getByTestId, getByText} = render(
      <CustomButton label="test" onPress={() => {}} testId="button" />,
    );

    const button = getByTestId('button');
    const label = getByText('test');

    expect(button).toBeDefined();
    expect(label).toBeDefined();
  });

  test('onPress should works correctly', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <CustomButton label="test" onPress={mockOnPress} testId="button" />,
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(mockOnPress).toBeCalledTimes(1);
  });

  test('onPress should not works when button is disabled', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <CustomButton
        label="test"
        onPress={mockOnPress}
        testId="button"
        disabled
      />,
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(mockOnPress).not.toBeCalled();
  });

  test('label should not be rendered when button is loading', () => {
    const mockOnPress = jest.fn();
    const {queryByText} = render(
      <CustomButton
        label="test"
        onPress={mockOnPress}
        testId="button"
        loading
      />,
    );

    expect(queryByText('test')).toBeNull();
  });
});
