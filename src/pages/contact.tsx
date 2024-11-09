import ContactUs from '../components/ContactUs/ContactUs';
import Breadcrumbs from '../components/shared/common/Breadcrumbs/Breadcrumbs';

const Contact = () => {
  const breadCrumbPaths = [
    {
      label: 'Contact',
      href: '',
    },
  ];
  return (
    <>
      <Breadcrumbs paths={breadCrumbPaths} />
      <ContactUs />
    </>
  );
};

export default Contact;
