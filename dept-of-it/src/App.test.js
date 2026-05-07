import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the LICET IT landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /the department of information technology/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
