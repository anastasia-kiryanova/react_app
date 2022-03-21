import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('is a Component', () => {
    expect(Header).toBeInstanceOf(Function);
  });

  it ('test snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Header component', () => {
    render(<Header />);
    expect(screen.getByTestId('header-text')).toBeTruthy();
  });
});