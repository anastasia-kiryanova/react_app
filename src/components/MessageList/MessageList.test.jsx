import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MessageList } from './MessageList';

describe ('MessageList', () => {
  it ('is a Component', () => {
    expect(MessageList).toBeInstanceOf(Function);
  });
  
  it ('test snapshot', () => {
    const mess = [
      {
        id: 1,
        author: 'test',
        text: 'test message'
      }
    ];
    const { asFragment } = render(<MessageList messages={mess} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('message list is empty', () => {
    const mess = [];
    render(<MessageList messages={mess} />);
    expect(screen.getByRole('list')).toBeTruthy();
    expect(screen.queryByRole('listitem')).toBeFalsy();
  });

  it('render message', () => {
    const mess = [
      {
        id: 1,
        author: 'test',
        text: 'test message'
      }
    ];
    render(<MessageList messages={mess} />);
    expect(screen.getByRole('listitem')).toBeTruthy();
    expect(screen.getByText(/test/)).toBeTruthy();
    expect(screen.getByText(/test message/)).toBeTruthy();
  });  
});