import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { BackBtn } from '../components/BackBtn/BackBtn';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('BackBtn Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    // Clear the mock before each test
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  test('renders the button with correct text', () => {
    render(<BackBtn />);
    const button = screen.getByRole('button', { name: /go back/i });
    expect(button).toBeTruthy(); 
  });

  test('navigates back when the button is clicked', () => {
    render(<BackBtn />);
    const button = screen.getByRole('button', { name: /go back/i });
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
