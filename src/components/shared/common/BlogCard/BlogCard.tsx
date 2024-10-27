import Flex from '../../Flex/Flex';
import styles from './BlogCard.module.scss';
import { H4, P } from '../../Text/Text';
import LinkButton from '../../LinkButton/LinkButton';
import clsx from 'clsx';

interface Props {
  imageUrl: string;
  heading: string;
  subHeading: string;
  linkUrl: string;
  isRow?: boolean;
}
const BlogCard: React.FC<Props> = ({
  imageUrl,
  heading,
  subHeading,
  isRow,
  linkUrl,
}) => {
  return (
    <Flex
      className={clsx(styles.blogCard, isRow && styles.row)}
      direction="column"
    >
      <div className={styles.imageWrap}>
        <img src={imageUrl} alt="image" />
      </div>
      <Flex className={styles.contentWrap} direction="column">
        <H4 fontWeight="semibold">{heading}</H4>
        <P fontWeight="medium">{subHeading}</P>
        <LinkButton
          url={linkUrl}
          singleBorder
          variant="outlined"
          className={styles.readMore}
        >
          Read Article
        </LinkButton>
      </Flex>
    </Flex>
  );
};

export default BlogCard;
