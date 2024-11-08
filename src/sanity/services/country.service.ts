import { client } from '../client';
import {
  fetchAllCountryDetails,
  fetchCountryByName,
  fetchCountryList,
} from '../queries/countryQueries';
import { Country } from '../types/country';

class CountryService {
  async getCountryStates() {
    try {
      return await client.fetch<Country[]>(fetchCountryList);
    } catch (error) {
      console.error('Error fetching countries:', error);
      return [];
    }
  }

  async getAllCountryDetails() {
    try {
      return await client.fetch(fetchAllCountryDetails);
    } catch (error) {
      console.error('Error fetching countries:', error);
      return [];
    }
  }

  async getCountryByName(slug: string) {
    try {
      return await client.fetch(fetchCountryByName, { slug });
    } catch (error) {
      console.error('Error fetching countries:', error);
      return [];
    }
  }
}

export const countryService = new CountryService();
