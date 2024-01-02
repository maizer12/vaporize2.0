import { FC } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import style from './Button.module.scss';

export const Button: FC<ButtonProps> = ({ icon, variant, children, ...props }) => {
  return (
    <button className={cn(style.button, style[variant])} {...props}>
      {icon && <img src={`img/icons/${icon}.svg`} alt={icon} />}
      {children}
    </button>
  );
};
