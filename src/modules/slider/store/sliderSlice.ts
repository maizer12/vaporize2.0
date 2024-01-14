import { createSlice } from '@reduxjs/toolkit';
import { SliderSliceProps } from './SliderSlice.props';
import { fetchSliderCards } from '../api/fetchSliderCards';

const initialState: SliderSliceProps = {
  items: [],
  status: 'loading',
};

const slice = createSlice({
  name: 'sliderSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSliderCards.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchSliderCards.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });
    builder.addCase(fetchSliderCards.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const {} = slice.actions;
export const sliderSlice = slice.reducer;
