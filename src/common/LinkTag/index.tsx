import { FC } from 'react';
import { LinkTagProps } from './LinkTag.props';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './LinkTag.module.scss';

export const LinkTag: FC<LinkTagProps> = ({ path, children, animation = 'opacity', array = false, isTag = false }) => {
  const getClass = cn(style[animation], style.link);

  if (isTag) {
    return (
      <a href={path} target="_blank" className={getClass}>
        {children}
      </a>
    );
  }

  return (
    <Link to={path} className={getClass}>
      {children}
    </Link>
  );
};
