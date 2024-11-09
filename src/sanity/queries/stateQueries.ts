export const fetchStateDetails = `*[_type == "state"] {
    title,
      tours[]->{
        title,
        tours[]->{
          title
        }
      }  
  }`;

export const fetchStateList = `*[_type == "state"] {
    title,
    "slug" : slug.current  
}`;
