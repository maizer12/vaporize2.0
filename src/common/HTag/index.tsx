import { FC } from 'react';
import { HTagProps } from './HTag.props';
import cn from 'classnames';
import style from './HTag.module.scss';

export const HTag: FC<HTagProps> = ({ children, tag }): JSX.Element => {
  const getClass = cn(style.title, style[tag]);

  switch (tag) {
    case 'h1':
      return <h1 className={getClass}>{children}</h1>;
    case 'h2':
      return <h2 className={getClass}>{children}</h2>;
    case 'h3':
      return <h3 className={getClass}>{children}</h3>;
    case 'h4':
      return <h4 className={getClass}>{children}</h4>;
    case 'h5':
      return <h5 className={getClass}>{children}</h5>;
    default:
      return <>{children}</>;
  }
};
