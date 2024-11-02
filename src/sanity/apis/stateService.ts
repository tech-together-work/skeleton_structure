import { client } from '../client';
import { fetchStateDetails, fetchStateList } from '../queries/stateQueries';

export async function getStateDetails() {
  return await client.fetch(fetchStateDetails);
}

export async function getStateList() {
  return await client.fetch(fetchStateList);
}
