import { client } from '../client';
import { fetchStateDetails, fetchStateList } from '../queries/stateQueries';

class StateService {
  async getStateDetails() {
    return await client.fetch(fetchStateDetails);
  }

  async getStateList() {
    return await client.fetch(fetchStateList);
  }
}

export default new StateService();
