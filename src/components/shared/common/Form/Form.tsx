import clsx from 'clsx';
import Star from '../../../../assets/icons/Star';
import Button from '../../Button/Button';
import Flex from '../../Flex/Flex';
import { H5 } from '../../Text/Text';
import styles from './Form.module.scss';
// import QuerySent from './QuerySent/QuerySent';
const Form = () => {
  return (
    <form className={styles.form}>
      <Flex alignItems="center" gap="8px" className={styles.heading}>
        <hr />
        <H5 fontWeight="semibold">Send a query</H5>
        <Star className={styles.star} />
      </Flex>
      <Flex direction="column" className={styles.formWrapper} gap="20px">
        <div className={styles.inputWrapper}>
          <input required name="firstName" type="text" />
          <span>
            First Name <sup>*</sup>
          </span>
        </div>
        <div className={styles.inputWrapper}>
          <input required name="email" type="text" />
          <span>
            Email <sup>*</sup>
          </span>
        </div>
        <Flex gap="20px" className={clsx(styles.couple, styles.number)}>
          <div className={styles.inputWrapper}>
            <select>
              <option value="0">+91</option>
              <option value="1">+92</option>
            </select>
          </div>
          <div className={styles.inputWrapper}>
            <input name="phoneNumber" type="number" />
            <span>Phone Number</span>
          </div>
        </Flex>

        <Flex gap="20px" className={styles.couple}>
          <div className={styles.inputWrapper}>
            <input name="travelDate" type="number" />
            <span>Travel Date</span>
          </div>
          <div className={styles.inputWrapper}>
            <input name="travellers" type="number" />
            <span>Travellers</span>
          </div>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          width={'100%'}
          className={styles.button}
        >
          <Button>Send query</Button>
        </Flex>
      </Flex>
      {/* <QuerySent /> */}
    </form>
  );
};

export default Form;
