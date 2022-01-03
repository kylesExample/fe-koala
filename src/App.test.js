import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h4Element = screen.getByText(/Set Timer Duration/i);
  expect(h4Element).toBeInTheDocument();
});
