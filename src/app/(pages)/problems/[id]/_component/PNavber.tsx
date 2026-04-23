import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { MdCodeOff } from 'react-icons/md';

const PNavber = () => {
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
          <Button variant="outline" className="rounded-md font-medium px-3 py-2 h-auto">
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
