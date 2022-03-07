import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Header} from './Header';

describe('Header unit test', () => {
  test('should works correctly', () => {
    const mockOnReload = jest.fn();
    const mockOnLogout = jest.fn();

    const {getByTestId, getByText} = render(
      <Header onLogout={mockOnLogout} onReload={mockOnReload} />,
    );

    const reload = getByTestId('default-tabs-reload');
    const logout = getByTestId('default-tabs-logout');

    fireEvent.press(reload);
    fireEvent.press(logout);

    expect(getByText('HOME')).toBeDefined();
    expect(mockOnReload).toBeCalledTimes(1);
    expect(mockOnLogout).toBeCalledTimes(1);
  });
});
