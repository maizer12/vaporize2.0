import { FC, ReactNode } from 'react';
import style from './SliderWrapper.module.scss';

interface SliderWrapperProps {
	children: ReactNode;
}

const SliderWrapper: FC<SliderWrapperProps> = ({ children }): JSX.Element => {
	return <div className={style.wrapper}>{children}</div>;
};

export default SliderWrapper;
