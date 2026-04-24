'use client';

import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { languageList } from '@/lib/languageList';
import { RootState } from '@/store/store';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const url = 'https://emkc.org/api/v2/piston/execute';

const PNavber = () => {
  const codeContent = useSelector((state: RootState) => state.codeContent);
  const { language, version } = useSelector(
    (state: RootState) => state.selectedLanguage,
  );

  const runCode = async () => {
    const findLang = languageList.find((lang) => lang.name === language);
    const payload = {
      language,
      version,
      files: [
        {
          name: `main.${findLang?.extension}`,
          content: codeContent,
        },
      ],
      stdin: '',
      args: ['1', '2', '3'],
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log('data:', data);
  };

  return (
    <nav className="z-[99999] flex items-center w-full sticky top-0 border-b border-white/15 px-5 h-16">
      <header className="w-full flex items-center justify-between">
        {/* nav left */}
        <div className="flex items-center gap-3">
          <Link href={'/problems'} className="flex items-center gap-1">
            <ArrowLeft size={20} /> Problems
          </Link>
          <Separator orientation="vertical" />
          <p className="text-muted-foreground capitalize">
            Longest Substring Without Repeating Characters
          </p>
        </div>

        {/* nav right */}
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            variant="outline"
            className="rounded-md font-medium px-3 py-2 h-auto"
          >
            Run
          </Button>
          <Button className="rounded-md font-medium px-3 py-2 h-auto">
            Submit
          </Button>
          <ThemeToggle className="w-auto h-auto p-2.5 aspect-square" />
        </div>
      </header>
    </nav>
  );
};

export default PNavber;
