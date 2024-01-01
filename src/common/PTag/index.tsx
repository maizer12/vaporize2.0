import { FC } from 'react';
import { PTagProps } from './PTag.props';
import cn from 'classnames';
import style from './PTag.module.scss';

export const PTag: FC<PTagProps> = ({ size, children, className }): JSX.Element => {
  return (
    <p className={cn(style.text, className, { [style.md]: size == 'md', [style.sm]: size == 'sm' })}>{children}</p>
  );
};
