'use client';

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { RootState } from '@/store/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import OutputBody from './OutputBody';
import TestCases from './TestCases';
import TestResult from './TestResult';
import { Spinner } from '@/components/ui/spinner';

const headersButtons = ['output', 'testcase', 'test_result'];

const Terminal = () => {
  const [selectedBtn, setSelectedBtn] = useState(headersButtons[0]);
  const { output, error, message, status, loading } = useSelector(
    (state: RootState) => state.codeOutput,
  );

  return (
    <>
      {/* headers */}
      <header className="w-full text-xs h-7 py-1 px-4 bg-zinc-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {headersButtons.map((btn, index) => (
            <div key={index} className="flex items-center gap-2">
              <button
                onClick={() => setSelectedBtn(btn)}
                className={cn(
                  'text-muted-foreground capitalize hover:text-white duration-200',
                  selectedBtn === btn && 'text-white',
                )}
              >
                {btn.replaceAll('_', ' ')}
              </button>

              {headersButtons.length - 1 !== index && (
                <Separator orientation="vertical" />
              )}
            </div>
          ))}
        </div>
        {loading && <Spinner />}
      </header>

      {/* body */}
      <div className="w-full h-full p-4 font-mono text-sm">
        {selectedBtn === 'output' && (
          <OutputBody
            status={status}
            error={error}
            message={message}
            loading={loading ?? false}
            output={JSON.parse(output || '[]')
              .map((o: any) => o.output)
              .join('\n')}
          />
        )}

        {selectedBtn === 'testcase' && <TestCases />}

        {selectedBtn === 'test_result' && (
          <TestResult
            status={status}
            error={error}
            output={output}
            loading={loading ?? false}
            message={message}
          />
        )}
      </div>
    </>
  );
};

export default Terminal;
