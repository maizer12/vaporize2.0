import { ReactNode } from 'react';

export interface LinkTagProps {
  path: string;
  children: ReactNode;
  color?: 'black' | 'white';
  size?: 'sm' | 'md';
  animation?: 'opacity' | 'outline';
  arrow?: Boolean;
  isTag?: Boolean;
}
