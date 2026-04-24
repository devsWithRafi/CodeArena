import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c';

export interface languageType {
  language: string;
  version: string;
}

const selectedLanguageSlice = createSlice({
  name: 'selectedLanguage',
  initialState: {
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
