import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label component', () => {
  it('renders with htmlFor attribute', () => {
    const { getByText } = render(<Label htmlFor="inputField">Input Label</Label>);
    const label = getByText('Input Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'inputField');
  });
});
