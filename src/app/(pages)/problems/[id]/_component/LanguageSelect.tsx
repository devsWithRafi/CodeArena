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
    language: string;
    version: string;
    aliases: string[];
  }[];
}

const LanguageSelect = ({ languages }: iProps) => {
  const dispatch = useDispatch();
  const language: languageType = useSelector(
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
    const version = languages.find((lang) => lang.language === value)?.version;
    const payload = { language: value, version: version! };
    dispatch(setSelectedLanguage(payload));
    localStorage.setItem('language', JSON.stringify(payload));
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="rounded-md font-normal text-sm capitalize">
        <SelectValue placeholder={language.language || 'javascript'} />
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
