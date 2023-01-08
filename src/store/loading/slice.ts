import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingStateProps {
  isLoading: boolean;
}

const InitialLoadingState: LoadingStateProps = {
  isLoading: false
};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState: InitialLoadingState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  }
});

export default LoadingSlice;
