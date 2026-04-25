import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface languageType {
  id: number;
  language: string;
  version: string;
}

const selectedLanguageSlice = createSlice({
  name: 'selectedLanguage',
  initialState: {
    id: 0,
    language: '',
    version: '',
  },
  reducers: {
    setSelectedLanguage: (_state, action: PayloadAction<languageType>) =>
      action.payload,
  },
});

export const { setSelectedLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
