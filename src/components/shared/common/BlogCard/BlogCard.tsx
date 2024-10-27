import Flex from '../../Flex/Flex';
import styles from './BlogCard.module.scss';
import { H4, P } from '../../Text/Text';
import LinkButton from '../../LinkButton/LinkButton';

interface Props {
  imageUrl: string;
  heading: string;
  subHeading: string;
  linkUrl: string;
}
const BlogCard: React.FC<Props> = ({
  imageUrl,
  heading,
  subHeading,
  linkUrl,
}) => {
  return (
    <Flex className={styles.blogCard}>
      <div className={styles.imageWrap}>
        <img src={imageUrl} alt="image" />
      </div>
      <H4>{heading}</H4>
      <P>{subHeading}</P>
      <LinkButton
        url={linkUrl}
        singleBorder
        variant="outlined"
        className={styles.readMore}
      >
        Read Article
      </LinkButton>
    </Flex>
  );
};

export default BlogCard;
