'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  languageType,
  setSelectedLanguage,
} from '@/features/selectedLanguageSlice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface iProps {
  languages: {
    id: number;
    language: string;
    version: string;
  }[];
}

const LanguageSelect = ({ languages }: iProps) => {
  const dispatch = useDispatch();
  const { language }: languageType = useSelector(
    (state: RootState) => state.selectedLanguage,
  );

  useEffect(() => {
    const loadLang = () => {
      const language = JSON.parse(localStorage.getItem('language')!);
      if (language) dispatch(setSelectedLanguage(language));
    };
    loadLang();
  }, []);

  const handleChange = (value: string) => {
    const { language, version, id } = languages.find(
      (lang) => lang.language === value,
    )!;
    const payload = { language, version, id };
    dispatch(setSelectedLanguage(payload));
    localStorage.setItem('language', JSON.stringify(payload));
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="rounded-md font-normal text-sm capitalize">
        <SelectValue placeholder={language || 'javascript'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages &&
            languages.map((lang, index) => (
              <SelectItem
                key={index}
                value={lang.language}
                className="rounded-md capitalize"
              >
                {lang.language}
                <span className="text-muted-foreground text-xs">
                  ({lang.version})
                </span>
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
