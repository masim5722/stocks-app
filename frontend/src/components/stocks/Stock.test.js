import { render, screen } from '@testing-library/react';
import Stock from './Stock';

test('renders learn react link', () => {
  render(<Stock />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
