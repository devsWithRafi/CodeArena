'use client';

import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useCodeRunner from '@/hooks/useCodeRunner';
import { RootState } from '@/store/store';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const PNavber = () => {
  const codeContent = useSelector((state: RootState) => state.codeContent);
  const { id: langId } = useSelector(
    (state: RootState) => state.selectedLanguage,
  );

  const { handleRunCode } = useCodeRunner();

  const handleExicuteCode = async () => {
    await handleRunCode(codeContent, langId);
  }

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
            onClick={handleExicuteCode}
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

// if error
// {
//     "stdout": null,
//     "time": "1.094",
//     "memory": 52356,
//     "stderr": "/box/script.js:1\nconsole.log(Hello world!)\n            ^^^^^\n\nSyntaxError: missing ) after argument list\n    at wrapSafe (node:internal/modules/cjs/loader:1378:20)\n    at Module._compile (node:internal/modules/cjs/loader:1428:41)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)\n    at Module.load (node:internal/modules/cjs/loader:1288:32)\n    at Module._load (node:internal/modules/cjs/loader:1104:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)\n    at node:internal/main/run_main_module:28:49\n\nNode.js v20.17.0\n",
//     "token": "c7579c1f-a974-408a-8d40-0e9697a2bd1c",
//     "compile_output": null,
//     "message": "Exited with error status 1",
//     "status": {
//         "id": 11,
//         "description": "Runtime Error (NZEC)"
//     }
// }

// if success
// {
//     "stdout": "Hello world!\n",
//     "time": "1.051",
//     "memory": 52868,
//     "stderr": null,
//     "token": "858ca119-093f-42ba-ac8e-b63f748f4dac",
//     "compile_output": null,
//     "message": null,
//     "status": {
//         "id": 3,
//         "description": "Accepted"
//     }
// }
