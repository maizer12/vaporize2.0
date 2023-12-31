import { ReactNode } from 'react';

export interface HTagProps {
	children: ReactNode;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}
