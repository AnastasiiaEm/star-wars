import { Film } from "../../types/film";
import { Person } from "../../types/person";
import { Starship } from "../../types/starship";

// function to create nodes for a person, films, and starships
export function createNodes(person: Person, films: Film[], ships: Starship[]) {
  // Initialize the nodes array with the person node
  const nodes = [
    {
      id: person.name,
      data: { label: person.name },
      position: { x: 0, y: 0 },
      className: 'custom-node',
    },
    // generate film nodes and their corresponding starship nodes
    ...films.flatMap(film => {
      const filmNode = {
        id: `film${film.title}`,
        data: { label: film.title },
        position: { x: 0, y: 0 },
        className: 'custom-node',
      };

      // find all starships associated with the current film
      const filmStarships = ships.filter(ship =>
        film.starships.includes(ship.id),
      );

      // create nodes for each starship
      const starshipNodes = filmStarships.map((starship, starshipIndex) => ({
        id: `starship${film.title}-${starshipIndex}`,
        data: { label: starship.name },
        position: { x: 0, y: 0 },
        className: 'custom-node',
      }));

      return [filmNode, ...starshipNodes];
    }),
  ];

  return nodes;
}