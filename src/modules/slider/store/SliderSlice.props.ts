import { ICard } from '../../../@types/ICard';

export interface Root {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface SliderSliceProps {
  items: Root[];
  status: 'loading' | 'success' | 'error';
}
