import { ReactNode } from 'react';

export interface PTagProps {
	children: ReactNode;
	size: 'sm' | 'md' | 'lg';
	className?: string;
}
