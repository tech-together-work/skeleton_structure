import clsx from 'clsx';

import styles from './PageLayout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ErrorTemplate from '../Error/Error';

export interface PageLayoutProps {
  children?: React.ReactNode;
  className?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({ className }) => {
  const { error } = useSelector((state: RootState) => state.error);
  if (error?.errorText) {
    return <ErrorTemplate error={error} />;
  }
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
