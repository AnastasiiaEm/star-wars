import { fetchData } from './http';
import { Film } from "../types/film";

// Async function to get films associated with a specific character ID
export async function getFilms(id: string) {
  const { results }: { results: Film[] } = await fetchData(`/films/?characters__contains=${id}`);
  return results;
}