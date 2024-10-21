import React, { FC, CSSProperties } from 'react';

interface FlexProps extends Omit<CSSProperties, 'direction'> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Flex: FC<FlexProps> = ({
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  wrap = 'nowrap',
  gap = '0',
  className,
  ...props
}) => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap,
    ...props,
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default Flex;
