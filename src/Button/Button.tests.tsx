import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Background color changes when button is disabled', () => {
  render(<Button disabled>Disabled Button</Button>);
  const buttonElement = screen.getByText(/Disabled Button/i);
  expect(buttonElement).toHaveStyle({ backgroundColor: '#ccc' });
});
