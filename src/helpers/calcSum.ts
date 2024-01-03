import ICart from '../@types/ICart';

export const calcSum = (arr: ICart[], key: keyof ICart): number => {
  return arr.reduce((sum, num) => {
    if (Number(num[key])) return sum + Number(num[key]);
    return 0;
  }, 0);
};
