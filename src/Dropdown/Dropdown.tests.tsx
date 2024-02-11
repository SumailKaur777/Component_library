import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown with options', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const onSelect = jest.fn();
  const { getByText, queryByText } = render(<Dropdown options={options} onSelect={onSelect} />);

  // Check if dropdown button is rendered
  const dropdownButton = getByText('Select Option');
  expect(dropdownButton).toBeInTheDocument();

  // Open dropdown menu
  fireEvent.click(dropdownButton);

  // Check if dropdown options are rendered
  options.forEach((option) => {
    const dropdownOption = getByText(option);
    expect(dropdownOption).toBeInTheDocument();
  });

  // Select an option and check if onSelect callback is called
  fireEvent.click(getByText('Option 1'));
  expect(onSelect).toHaveBeenCalledWith('Option 1');

  // Close dropdown menu
  fireEvent.click(dropdownButton);
  options.forEach((option) => {
    const dropdownOption = queryByText(option);
    expect(dropdownOption).toBeNull();
  });
});
