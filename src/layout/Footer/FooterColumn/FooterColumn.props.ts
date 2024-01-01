import { ReactNode } from 'react';
import ILink from '../../../types/ILink';

export interface FooterColumnProps {
  name: string;
  items: ILink[];
  children?: ReactNode;
  useSocial?: Boolean;
}
