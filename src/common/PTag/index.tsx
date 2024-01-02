import { FC } from 'react';
import { PTagProps } from './PTag.props';
import cn from 'classnames';
import style from './PTag.module.scss';

export const PTag: FC<PTagProps> = ({ size, children, className, variant = '' }): JSX.Element => {
  const getClass = cn(style.text, className, { [style.md]: size == 'md', [style.sm]: size == 'sm' }, style[variant]);
  return <p className={getClass}>{children}</p>;
};
