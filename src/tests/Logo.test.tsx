import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Logo } from '../components/Logo/Logo';
import '@testing-library/jest-dom';

describe('Logo Component', () => {
  it('renders the logo image', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const logoImage = screen.getByAltText('LOGO');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/assets/star-wars-4.svg');
  });

  it('has the correct link', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const logoLink = screen.getByRole('link', { name: /LOGO/i });
    expect(logoLink).toHaveAttribute('href', '/characters');
  });
});