import { client } from '../client';
import { fetchTourByName, fetchAllTours } from '../queries/tourQueries';

class CityService {
  async getTours() {
    return await client.fetch(fetchAllTours);
  }
  async getTourByName(slug: string) {
    try {
      const result = await client.fetch(fetchTourByName, { slug });
      if (!result || result.length === 0) {
        throw new Error(`No tour found with the slug: ${slug}`);
      }
      return result;
    } catch (error) {
      console.error('Error fetching tours:', error);
      return [];
    }
  }
}

export const cityService = new CityService();
