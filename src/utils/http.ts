const BASE_URL = 'https://sw-api.starnavi.io';

// function to fetch data from a given endpoint
export async function fetchData(endpoint: string) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    const error = new Error('An error occurred while fetching data');
    throw error;
  }

  return await response.json();
}