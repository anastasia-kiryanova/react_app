import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe ('Form', () => {
  it ('is a Component', () => {
    expect(Form).toBeInstanceOf(Function);
  });

  it ('renders Form component', () => {
    render(<Form addMessage={() => null} />);
    expect(screen.getByText('Отправить')).toBeInTheDocument();
  });

  it ('test snapshot', () => {
    const { asFragment } = render(<Form addMessage={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe ('functionality', () => {
    beforeEach(() => {
      render(<Form />);
    });

    it ('input field is empty', () => {
      const inputEl = screen.getByTestId('form-input');
      expect(inputEl.value).toBe('');
    });

    it ('filling in the input field', () => {
      const inputEl = screen.getByTestId('form-input');
      fireEvent.change(inputEl, {target:{ value: 'abcdef123' }});
      expect(inputEl.value).toBe('abcdef123');
    });
  }); 
});