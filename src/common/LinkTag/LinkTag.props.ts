import { ReactNode } from 'react';

export interface LinkTagProps {
  path: string;
  children: ReactNode;
  animation: 'opacity' | 'outline';
  array: Boolean;
}
