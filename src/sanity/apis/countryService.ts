// src/sanity/api/countryService.ts
import { client } from '../client';
import {
  fetchAllCountryDetails,
  fetchCountryByName,
  fetchCountryList,
} from '../queries/countryQueries';

export async function getCountries() {
  return await client.fetch(fetchCountryList);
}

export async function getAllCountryDetails() {
  return await client.fetch(fetchAllCountryDetails);
}

export async function getCountryByName(slug: string) {
  return await client.fetch(fetchCountryByName, { slug });
}
