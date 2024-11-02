import {
  getCountries,
  getCountryByName,
  getPosts,
  getAllCountryDetails,
  getStateDetails,
  getCities,
  getStateList,
} from '../sanity/index';
import { getImageUrl } from '../sanity/helper';
import { Post } from '../sanity/types/post';

import { useEffect, useState } from 'react';

const About = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getPosts();
      const stateDetails = await getStateDetails();
      const states = await getStateList();
      const allDetails = await getAllCountryDetails();
      const oneCountry = await getCountryByName('india');
      const countries = await getCountries();
      const cities = await getCities();

      setPosts(posts);
      console.log('All Details \n:', allDetails);
      console.log('\nAll Countries \n:', countries, oneCountry);
      console.log('\nAll States \n:', states, stateDetails);
      console.log('\nAll Cities \n:', cities, posts);
    };
    fetchPost();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <img src={getImageUrl(post.image)} alt={post.title} />
        </div>
      ))}
    </div>
  );
};

export default About;
