import { FC } from 'react';
import { LinkTagProps } from './LinkTag.props';
import { Link } from 'react-router-dom';

export const LinkTag: FC<LinkTagProps> = ({ path, children }) => {
  return <Link to={path}>{children}</Link>;
};
