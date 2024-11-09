import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

export function getImageUrl(source: any): string {
  if (source === null) return '';
  const builder = imageUrlBuilder(client);

  return builder.image(source).url();
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
