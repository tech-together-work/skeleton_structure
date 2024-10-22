import Flex from '../Flex/Flex';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
  const menuItems = ['Destinations', 'Holiday Types'];
  return (
    <Flex alignItems="center" gap="40px">
      {menuItems.map((item, index) => {
        return <MenuItem name={item} key={index} />;
      })}
    </Flex>
  );
};

export default Menu;
