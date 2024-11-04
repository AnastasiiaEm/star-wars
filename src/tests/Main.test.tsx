import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Main } from '../components/Main/Main';

describe('Main Component', () => {
  it('renders the main element', () => {
    render(
      <Main>
        <div>Test Content</div>
      </Main>
    );

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Main>
        <div>Test Content</div>
      </Main>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});