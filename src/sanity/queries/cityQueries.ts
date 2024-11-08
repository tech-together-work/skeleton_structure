// src/sanity/queries/cityQueries.ts
export const fetchSelectedCity = `*[_type == "city" && defined(tourTypes[title == "Solo"])] {
    title,
    state->{
      title
    },
    tourTypes[]->{
      title
    }
  }`;

export const fetchAllCities = `*[_type == "city"] {
    title,
    state->{
      title
    },
    "slug" : slug.current,
    tourTypes[]->{
      title
    }  
}`;
