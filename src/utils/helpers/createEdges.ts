import { Edge, EdgeType } from "../../types/edge";
import { Film } from "../../types/film";
import { Person } from "../../types/person";
import { Starship } from "../../types/starship";

// function to create edges between a person, films, and starships
export function createEdges(person: Person, films: Film[], ships: Starship[]) {
  const edges: Edge[] = [];

  // Iterate over each film the person is in
  films.forEach(film => {
     // Create an edge from the person to the film
    edges.push({
      id: `${person.name}-film${film.title}`,
      source: person.name,
      target: `film${film.title}`,
      type: EdgeType.STRAIGHT, 
      animated: false,
      className: 'custom-edge'
    });

    // Find all starships that appear in the current film
    const filmStarships = ships.filter(ship =>
      film.starships.includes(ship.id)
    );

    // Create edges from the film to each starship
    edges.push(
      ...filmStarships.map(( _, starshipIndex) => ({
        id: `film${film.title}-starship${starshipIndex}`,
        source: `film${film.title}`,
        target: `starship${film.title}-${starshipIndex}`,
        type: EdgeType.STRAIGHT, 
        animated: true,
        className: 'custom-edge'
      }))
    );
  });

  return edges;
}