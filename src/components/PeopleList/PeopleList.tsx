import { Link } from "react-router-dom";
import { Person } from "../../types/person";
import './peopleList.css'

type PeopleListProps = {
  people: Person[],
}

export const PeopleList: React.FC<PeopleListProps>  = ({ people }) => {
  return (
    <ul className="list">
    {people.map((person: Person) => (
    <li key={person.name}>
      <Link to={person.id.toString()} state={person} className="list__link">
        {person.name}
      </Link>
    </li>
    ))}
  </ul>
  );
};