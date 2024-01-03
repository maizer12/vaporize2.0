import { FC } from 'react';
import { LinkTagProps } from './LinkTag.props';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './LinkTag.module.scss';

export const LinkTag: FC<LinkTagProps> = ({
  path,
  children,
  animation = 'opacity',
  arrow = false,
  isTag = false,
  size = 'sm',
  color,
}) => {
  const className = cn(style[animation], style.link, size, style[color || ''], { [style.arrow]: arrow });
  const icon = arrow && <img src="img/icons/arrow.svg" alt="arrow" />;

  if (isTag) {
    return (
      <a href={path} target="_blank" className={className}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link to={path} className={className}>
      {children}
      {icon}
    </Link>
  );
};
