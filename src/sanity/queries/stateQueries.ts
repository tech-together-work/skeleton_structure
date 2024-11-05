export const fetchStateDetails = `*[_type == "state"] {
    title,
      cities[]->{
        title,
        tourTypes[]->{
          title
        }
      }  
  }`;

export const fetchStateList = `*[_type == "state"] {
    title,
    "slug" : slug.current  
}`;
