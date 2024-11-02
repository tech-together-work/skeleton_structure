// src/sanity/queries/cityQueries.ts
export const fetchSelectedCity = `*[_type == "city" && defined(listingTypes[title == "Solo"])] {
    title,
    state->{
      title
    },
    listingTypes[]->{
      title
    }
  }`;

export const fetchAllCities = `*[_type == "city"] {
    title,
    state->{
      title
    },
    "slug" : slug.current,
    listingTypes[]->{
      title
    }  
}`;
