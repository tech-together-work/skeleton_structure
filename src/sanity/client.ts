// src/sanity/client.ts
import createClient from '@sanity/client';

export const client = createClient({
  projectId: '2cc6yhlq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
