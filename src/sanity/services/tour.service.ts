import { client } from '../client';
import { fetchTourByName, fetchAllTours } from '../queries/tourQueries';

class CityService {
  async getTours() {
    return await client.fetch(fetchAllTours);
  }
  async getTourByName(slug: string) {
    try {
      return await client.fetch(fetchTourByName, { slug });
    } catch (error) {
      console.error('Error fetching tours:', error);
      return [];
    }
  }
}

export const cityService = new CityService();
