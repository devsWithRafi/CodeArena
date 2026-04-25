import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface codeOutputType {
  output: string | null;
  error: string | null;
  message: string | null;
  status: string | null;
  token?: string;
}

const initialState: codeOutputType = {
  output: '',
  error: '',
  message: '',
  status: '',
  token: '',
};

const codeOutputSlice = createSlice({
  name: 'codeOutput',
  initialState: initialState,
  reducers: {
    setCodeOutput: (_state, action: PayloadAction<codeOutputType>) =>
      action.payload,
  },
});

export const { setCodeOutput } = codeOutputSlice.actions;
export default codeOutputSlice.reducer;
