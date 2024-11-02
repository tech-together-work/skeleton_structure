// src/sanity/fetchers/cityFetcher.ts
import { client } from '../client';
import { fetchSelectedCity, fetchAllCities } from '../queries/cityQueries';

export async function getCities() {
  return await client.fetch(fetchAllCities);
}

export async function getSelectedCity() {
  return await client.fetch(fetchSelectedCity);
}
