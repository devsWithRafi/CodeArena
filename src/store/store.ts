import { configureStore } from '@reduxjs/toolkit';
import selectedLanguageReducer from '@/features/selectedLanguageSlice';
import codeReducer from '@/features/codeSlice';

const store = configureStore({
  reducer: {
    selectedLanguage: selectedLanguageReducer,
    codeContent: codeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
