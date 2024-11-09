// src/sanity/queries/countryQueries.ts
export const fetchAllCountryDetails = `*[_type == "country"] {
    title,
    states[]->{
      title,
      tours[]->{
        title,
        holidayType[]->{
          title
        }
      }
    }
  }`;

export const fetchCountryByName = `*[_type == "country" && slug.current == $slug] {
    title,
    states[]->{
      title,
      tours[]->{
        title,
        holidayType[]->{
          title
        }
      }
    }
  }`;

export const fetchCountryList = `*[_type == "country" | order(order asc)]{
   _id,
   title,
   "slug": slug.current,
   description,
   image,
   order,
   states[]->{
     _id,
     title,
     "slug": slug.current,
   }
 }`;
