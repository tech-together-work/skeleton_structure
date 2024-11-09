// src/sanity/queries/cityQueries.ts
export const fetchTourByName = `*[_type == "tour" && slug.current == $slug] {
    title,
    highlights,
    "slug": slug.current,
    mainImage,
    images,
    state->{
      _id,
      title,
      country->{
        title
      }
    },
    holidayType[]->{
      _id,
      title,
      description,
      icon
    },
    tripDetails,
    tourRating,
    inclusions,
    exclusions
  }`;

export const fetchAllTours = `*[_type == "tour"] {
    title,
    state->{
      title
    },
    "slug" : slug.current,
    holidayType[]->{
      title
    }  
}`;
