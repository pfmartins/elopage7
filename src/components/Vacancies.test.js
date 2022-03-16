import { render, screen } from '@testing-library/react';
import Vacancies from './Vacancies';
import vacanciesBackground from '../assets/elo7-back2.png';

test('renders section element', () => {
  const text = 'vacancies-element';
  render(<Vacancies />);
  const mainElement = screen.getByTestId(text);
  expect(mainElement).toBeDefined();
});

test('renders title text', () => {
  const text = 'Vagas em aberto';
  render(<Vacancies />);
  const linkElement = screen.getByText(/Vagas em aberto/i);
  expect(linkElement.textContent).toBe(text);
});

test('renders image background', () => {
  const textAlt = 'Vagas background';
  const basePath = 'http://localhost/';

  render(<Vacancies />);
  const linkElement = screen.getByAltText(textAlt);

  expect(linkElement.alt).toBe(textAlt);
  expect(linkElement.src.replace(basePath, "")).toBe(vacanciesBackground);
});
