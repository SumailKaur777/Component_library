import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders card with children', () => {
  const { getByText } = render(<Card>This is a test card</Card>);
  expect(getByText('This is a test card')).toBeInTheDocument();
});
