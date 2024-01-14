import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const fetchSliderCards = createAsyncThunk('cards/fetchSliderCards', async (productID: number) => {
  const res = await axios.get<Root>('https://fakestoreapi.com/products/1');
  return [res.data];
});
