import { Link } from 'react-router-dom';
import Flex from '../Flex/Flex';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
import { P, Text } from '../Text/Text';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import logo from '../../../assets/images/logo.svg';
import { RoutesEnum } from '../../../enums/RouteEnums';
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Header = () => {
  const [hamActive, setHamActive] = useState<boolean>(false);

  useEffect(() => {
    if (hamActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [hamActive]);

  return (
    <nav className={styles.navBar}>
      <div className={styles.section}>
        <div className={styles.headerWrap}>
          <Flex alignItems="center" gap="40px" className={styles.hide}>
            <Menu />
            <Link to={RoutesEnum.ABOUT}>
              <P color={ColorsEnum.Black80}>About</P>
            </Link>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="cenetr"
            className={styles.logoWrap}
          >
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
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            gap="24px"
            className={styles.hide}
          >
            <Button variant="outlined-black">Craft a Trip</Button>
            <Link to={RoutesEnum.CONTACT}>
              <Button>Contact Us</Button>
            </Link>
          </Flex>
          <div className={styles.mobileMenu}>
            <HamBurger
              onClick={() => {
                setHamActive((prev) => !prev);
              }}
              isActive={hamActive}
            />
            <div className={clsx(styles.slide, hamActive && styles.slideIt)}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

interface HamProps {
  onClick: () => void;
  isActive: boolean;
}
const HamBurger: React.FC<HamProps> = ({ onClick, isActive }) => {
  return (
    <button
      className={clsx(styles.menuToggle, isActive && styles.active)}
      onClick={onClick}
    >
      <div className={styles.menuBar} data-position="top"></div>
      <div className={styles.menuBar} data-position="bottom"></div>
    </button>
  );
};
