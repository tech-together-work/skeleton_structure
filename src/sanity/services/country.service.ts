import { client } from '../client';
import {
  fetchAllCountryDetails,
  fetchCountryByName,
  fetchCountryList,
} from '../queries/countryQueries';
import { Country } from '../types/country';

class CountryService {
  async getCountries() {
    try {
      return await client.fetch<Country[]>(fetchCountryList);
    } catch (error) {
      console.error('Error fetching countries:', error);
      return [];
    }
  }

  async getAllCountryDetails() {
    return await client.fetch(fetchAllCountryDetails);
  }

  async getCountryByName(slug: string) {
    return await client.fetch(fetchCountryByName, { slug });
  }
}

export const countryService = new CountryService();
