import { fetchData } from './http';

// function to get a list of people from the API, with pagination support
export async function getPeople(page: number) {
  return await fetchData(`/people/?page=${page}`);
}