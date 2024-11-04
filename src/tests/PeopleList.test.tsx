import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { PeopleList } from '../components/PeopleList/PeopleList';
import { Person } from '../types/person';

describe('PeopleList Component', () => {
  const mockPeople: Person[] = [
    { "id": 1,
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": 1,
      "films": [
          1,
          2,
          3,
          6
      ],
      "species": [
          1
      ],
      "vehicles": [
          14,
          30
      ],
      "starships": [
          12,
          22
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://sw-api.starnavi.io/people/1/",
}];

  const renderComponent = () =>
    render(
      <BrowserRouter>
        <PeopleList people={mockPeople} />
      </BrowserRouter>
    );

  it('renders a list of people', () => {
    renderComponent();
    expect(screen.getAllByRole('listitem')).toHaveLength(mockPeople.length);
  });

  it('renders each person name as a link', () => {
    renderComponent();
    mockPeople.forEach((person) => {
      const personLink = screen.getByRole('link', { name: person.name });
      expect(personLink).toBeInTheDocument();
      expect(personLink).toHaveAttribute('href', `/${person.id}`);
    });
  });
});