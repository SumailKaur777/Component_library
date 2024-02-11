import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage component', () => {
  it('renders with src and alt attributes', () => {
    const { getByAltText } = render(<HeroImage src="image.jpg" alt="Test Image" />);
    const image = getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('renders with caption when provided', () => {
    const { getByText } = render(<HeroImage src="image.jpg" alt="Test Image" caption="Test Caption" />);
    const caption = getByText('Test Caption');
    expect(caption).toBeInTheDocument();
  });

  it('does not render caption when not provided', () => {
    const { queryByText } = render(<HeroImage src="image.jpg" alt="Test Image" />);
    const caption = queryByText('Test Caption');
    expect(caption).toBeNull();
  });
});
