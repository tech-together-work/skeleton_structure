import clsx from "clsx";

import styles from "./PageLayout.module.scss";

export interface PageLayoutProps {
  children?: React.ReactNode;
  className?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <>
      {/* Header */}
      <main className={clsx(styles.main, className)}>{children}</main>
      {/* Footer */}
    </>
  );
};

export default PageLayout;
