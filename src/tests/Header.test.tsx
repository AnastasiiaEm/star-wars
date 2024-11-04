import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import '@testing-library/jest-dom';

jest.mock('../components/BackBtn/BackBtn', () => ({
  BackBtn: jest.fn(() => <button>Go Back</button>),
}));

describe('Header Component', () => {
  it('renders the Logo component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('does not render the BackBtn when on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.queryByText('Go Back')).not.toBeInTheDocument();
  });

  it('renders the BackBtn when not on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/some-other-route']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Go Back')).toBeInTheDocument();
  });
});