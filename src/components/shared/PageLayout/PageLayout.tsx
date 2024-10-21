import clsx from 'clsx';

import styles from './PageLayout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export interface PageLayoutProps {
  children?: React.ReactNode;
  className?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div>
      <Header />
      <main className={clsx(styles.main, className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
