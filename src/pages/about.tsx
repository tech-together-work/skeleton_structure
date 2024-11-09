import AboutUs from '../components/AboutUs/AboutUs';
import Breadcrumbs from '../components/shared/common/Breadcrumbs/Breadcrumbs';

const About = () => {
  const breadCrumbPaths = [
    {
      label: 'About',
      href: '',
    },
  ];
  return (
    <>
      <Breadcrumbs paths={breadCrumbPaths} />
      <AboutUs />
    </>
  );
};

export default About;
