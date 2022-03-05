import { render, screen } from '@testing-library/react';
import { Hero } from './components';

test('renders hero text', () => {
  const text = 'Trabalhe no Elo7';
  render(<Hero />);
  const linkElement = screen.getByText(/Trabalhe no Elo7/i);
  expect(linkElement.textContent).toBe(text);
});
