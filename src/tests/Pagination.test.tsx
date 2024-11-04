import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from '../components/Pagination/Pagination';

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();

  afterEach(() => {
    mockOnPageChange.mockClear();
  });

  it('renders the current page number', () => {
    render(
      <Pagination page={1} isPlaceholderData={false} hasNextPage={true} onPageChange={mockOnPageChange} />
    );
    expect(screen.getByText('Page: 1')).toBeInTheDocument();
  });

  it('disables the "Previous Page" button on the first page', () => {
    render(
      <Pagination page={1} isPlaceholderData={false} hasNextPage={true} onPageChange={mockOnPageChange} />
    );
    const prevButton = screen.getByText('Previous Page');
    expect(prevButton).toBeDisabled();
  });

  it('enables the "Next Page" button when there is a next page and data is not a placeholder', () => {
    render(
      <Pagination page={1} isPlaceholderData={false} hasNextPage={true} onPageChange={mockOnPageChange} />
    );
    const nextButton = screen.getByText('Next Page');
    expect(nextButton).toBeEnabled();
  });

  it('disables the "Next Page" button when isPlaceholderData is true', () => {
    render(
      <Pagination page={1} isPlaceholderData={true} hasNextPage={true} onPageChange={mockOnPageChange} />
    );
    const nextButton = screen.getByText('Next Page');
    expect(nextButton).toBeDisabled();
  });

  it('disables the "Next Page" button when hasNextPage is false', () => {
    render(
      <Pagination page={1} isPlaceholderData={false} hasNextPage={false} onPageChange={mockOnPageChange} />
    );
    const nextButton = screen.getByText('Next Page');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange with the previous page when "Previous Page" is clicked', () => {
    render(
      <Pagination page={2} isPlaceholderData={false} hasNextPage={true} onPageChange={mockOnPageChange} />
    );
    const prevButton = screen.getByText('Previous Page');
    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange with the next page when "Next Page" is clicked', () => {
    render(
      <Pagination page={1} isPlaceholderData={false} hasNextPage={true} onPageChange={mockOnPageChange} />
    );
    const nextButton = screen.getByText('Next Page');
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });
});
