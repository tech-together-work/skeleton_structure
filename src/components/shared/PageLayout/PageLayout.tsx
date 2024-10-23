import clsx from 'clsx';

import styles from './PageLayout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export interface PageLayoutProps {
  children?: React.ReactNode;
  className?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({ className }) => {
  return (
    <div>
      <Header />
      <main className={clsx(styles.main, className)}>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
