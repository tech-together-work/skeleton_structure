export const fetchStateDetails = `*[_type == "state"] {
    title,
      cities[]->{
        title,
        listingTypes[]->{
          title
        }
      }  
  }`;

export const fetchStateList = `*[_type == "state"] {
    title,
    "slug" : slug.current  
}`;
