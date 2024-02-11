import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton component', () => {
  it('renders with label and checks/unchecks on change', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <RadioButton id="radioButton1" value="option1" checked={false} onChange={handleChange} label="Option 1" />
    );
    const radioButton = getByLabelText('Option 1');
    expect(radioButton).toBeInTheDocument();
    fireEvent.click(radioButton);
    expect(handleChange).toHaveBeenCalledWith('option1');
  });
});
