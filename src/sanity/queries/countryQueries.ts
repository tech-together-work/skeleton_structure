// src/sanity/queries/countryQueries.ts
export const fetchAllCountryDetails = `*[_type == "country"] {
    title,
    states[]->{
      title,
      cities[]->{
        title,
        tourTypes[]->{
          title
        }
      }
    }
  }`;

export const fetchCountryByName = `*[_type == "country" && slug.current == $slug] {
    title,
    states[]->{
      title,
      cities[]->{
        title,
        tourTypes[]->{
          title
        }
      }
    }
  }`;

export const fetchCountryList = `*[_type == "country"]{
    title,
    "slug": slug.current
  }`;
