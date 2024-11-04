import { fetchData } from './http';
import { Starship } from "../types/starship";

// function to retrieve a list of starships that a specific pilot (by ID) is associated with
export async function getStarships(id: string) {
  const { results }: { results: Starship[] } = await fetchData(`/starships/?pilots__contains=${id}`);
  return results;
}