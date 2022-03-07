import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {ErrorModal} from './ErrorModal';

describe('ErrorModal unit tests', () => {
  test('should render correctly', () => {
    const {getByText} = render(
      <ErrorModal
        show
        setShow={jest.fn()}
        error="error_test"
        textButton="button_test"
      />,
    );

    const label = getByText('error_test');
    const button = getByText('button_test');

    expect(label).toBeDefined();
    expect(button).toBeDefined();
  });

  test('onSetShow should works correctly', () => {
    const mockOnSetShow = jest.fn();
    const {getByText} = render(
      <ErrorModal
        show
        setShow={mockOnSetShow}
        error="error_test"
        textButton="button_test"
      />,
    );

    const button = getByText('button_test');
    fireEvent.press(button);

    expect(mockOnSetShow).toBeCalledWith(false);
  });
});
