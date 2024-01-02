import { FC } from 'react';
import { StarsProps } from './Stars.props';
import style from './Stars.module.scss';

export const Stars: FC<StarsProps> = ({ sum = 5, value }) => {
  const arr = [...new Array(sum)];

  return (
    <div className={style.stars}>
      {arr.map((e, i) => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" key={i}>
          <path
            d="M4.56072 10.3525L1.99782 7.54562L0.972656 6.42286L6.61104 5.30009L7.12362 1.93179L8.66136 0.809021L11.2243 5.30009L15.8375 6.42286L12.2494 10.9139L13.2746 14.2822L12.762 15.9664L8.14878 13.7208L5.0733 15.405H4.04814L4.56072 10.3525Z"
            fill={i >= value ? '#CBCBCB' : '#F2CB40'}
          />
        </svg>
      ))}
    </div>
  );
};
