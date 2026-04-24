import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const codeSlice = createSlice({
  name: 'codeContent',
  initialState: '',
  reducers: {
    setCodeContent: (_state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setCodeContent } = codeSlice.actions;
export default codeSlice.reducer;
