import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('is a Component', () => {
    expect(Header).toBeInstanceOf(Function);
  });

  it('renders Header component', () => {
    const title = 'Добро пожаловать в чат';
    render(<Header title={title} />);
    expect(screen.getByTestId('header-text')).toBeTruthy();
  });
});