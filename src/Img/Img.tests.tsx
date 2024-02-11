import React from 'react';
import { render } from '@testing-library/react';
import Img from './Img';

describe('Img component', () => {
  it('renders with src and alt attributes', () => {
    const { getByAltText } = render(<Img src="image.jpg" alt="Test Image" />);
    const image = getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
  });
});
