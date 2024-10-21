import { Link } from 'react-router-dom';
import Flex from '../Flex/Flex';
import Section from '../Section/Section';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
import { P, Text } from '../Text/Text';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import logo from '../../../assets/images/logo.svg';
import { RoutesEnum } from '../../../enums/RouteEnums';
import Button from '../Button/Button';

const Header = () => {
  return (
    <nav className={styles.navBar}>
      <Section className={styles.section}>
        <div className={styles.headerWrap}>
          <Flex alignItems="center" gap="40px">
            <Menu />
            <Link to={RoutesEnum.ABOUT}>
              <P color={ColorsEnum.Black80}>About</P>
            </Link>
          </Flex>
          <Flex justifyContent="center" alignItems="cenetr">
            <Link to={RoutesEnum.HOME} className={styles.logo}>
              <img src={logo} alt="logo" />
              <Text
                fontSize={26}
                fontWeight="medium"
                color={ColorsEnum.Neutral900}
                className={styles.logoText}
              >
                Swagatam Tours
              </Text>
            </Link>
          </Flex>
          <Flex justifyContent="flex-end" alignItems="center" gap="24px">
            <Button variant="outlined-black">Craft a Trip</Button>
            <Link to={RoutesEnum.CONTACT}>
              <Button>Contact Us</Button>
            </Link>
          </Flex>
        </div>
      </Section>
    </nav>
  );
};

export default Header;
