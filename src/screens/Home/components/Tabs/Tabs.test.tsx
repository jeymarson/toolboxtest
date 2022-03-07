import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Tabs} from './Tabs';

const TABS = [
  {
    value: 1,
    label: 'one',
  },
  {
    value: 2,
    label: 'two',
  },
];

describe('Tabs unit tests', () => {
  test('should render correctly', () => {
    const {getByText} = render(
      <Tabs tabs={TABS} onChange={jest.fn()} selected={1} />,
    );

    const uno = getByText(TABS[0].label);
    const two = getByText(TABS[1].label);

    expect(uno).toBeDefined();
    expect(two).toBeDefined();
  });

  test('onChange should works correctly', () => {
    const mockOnChange = jest.fn();
    const {getByText} = render(
      <Tabs tabs={TABS} onChange={mockOnChange} selected={1} />,
    );

    const two = getByText(TABS[1].label);
    fireEvent.press(two);

    expect(mockOnChange).toBeCalledWith(TABS[1].value);
  });
});
