import clsx from 'clsx';
import { RoutesEnum } from '../../../enums/RouteEnums';
import LinkButton from '../../shared/LinkButton/LinkButton';
import { H1, H6 } from '../../shared/Text/Text';
import styles from './Block.module.scss';
import dummyImage from '../../../assets/images/banner.png';
import Star from '../../../assets/icons/Star';
const Block2 = () => {
  return (
    <div className={clsx(styles.block, styles.block2)}>
      <div className={styles.content}>
        <H1 fontWeight="medium">Global Reach, Local Expertise</H1>
        <H6 fontWeight="medium">
          From cultural tours to corporate events, our experienced team ensures
          memorable experiences across India and beyond, with a focus on
          authenticity and quality.
        </H6>
        <LinkButton
          className={styles.link}
          href={RoutesEnum.CONTACT}
          variant="outlined"
        >
          Get in touch
        </LinkButton>
      </div>
      <div className={styles.image}>
        <div className={styles.wrap}>
          <div className={styles.star1}>
            <Star />
          </div>
          <div className={styles.star2}>
            <Star />
          </div>
          <div className={styles.inner}>
            <img src={dummyImage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block2;
