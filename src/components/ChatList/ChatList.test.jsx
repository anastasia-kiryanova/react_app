import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ChatList } from './ChatList';

describe ('ChatList', () => {
  it ('is a Component', () => {
    expect(ChatList).toBeInstanceOf(Function);
  }); 

  it ('test snapshot', () => {
    const { asFragment } = render(<ChatList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it ('renders ChatList component', () => {
    render(<ChatList />);
    expect(screen.getByTestId('list')).toBeTruthy();
  }); 
});