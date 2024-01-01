import { FC } from 'react';
import { HTag, PTag, Socials, LinkTag } from '../../../common';
import { FooterColumnProps } from './FooterColumn.props';
import style from './FooterColumn.module.scss';

export const FooterColumn: FC<FooterColumnProps> = ({ items, name, children, useSocial = false }) => {
  return (
    <li className={style.column}>
      <HTag tag="h3">{name}</HTag>
      {children || (
        <div className={style.links}>
          {items.map((e, i) => (
            <LinkTag path={e.path} key={i}>
              {e.name}
            </LinkTag>
          ))}
        </div>
      )}
      {useSocial && <Socials />}
    </li>
  );
};
