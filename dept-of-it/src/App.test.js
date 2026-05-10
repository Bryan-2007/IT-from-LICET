import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the LICET IT landing page and navigates between pages', () => {
  window.history.pushState({}, '', '/');
  window.scrollTo = jest.fn();

  render(<App />);
  expect(screen.getByRole('heading', { name: /the department of information technology/i })).toBeInTheDocument();
  const navbar = screen.getByRole('navigation');
  expect(navbar).toBeInTheDocument();

  fireEvent.click(within(navbar).getByRole('link', { name: 'About' }));
  expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
  expect(window.location.pathname).toBe('/about');
});
