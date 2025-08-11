import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page by default', () => {
  render(<App />);
  const headingElement = screen.getByText(/Home Page/i);
  expect(headingElement).toBeInTheDocument();
});
