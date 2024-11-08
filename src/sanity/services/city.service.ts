import { client } from '../client';
import { fetchSelectedCity, fetchAllCities } from '../queries/cityQueries';

class CityService {
  async getCities() {
    return await client.fetch(fetchAllCities);
  }
  async getSelectedCity() {
    return await client.fetch(fetchSelectedCity);
  }
}

export default new CityService();
