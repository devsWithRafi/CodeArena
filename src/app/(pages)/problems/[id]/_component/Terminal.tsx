'use client';

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { RootState } from '@/store/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const headersButtons = ['output', 'testcase', 'test_result'];

const Terminal = () => {
  const [selectedBtn, setSelectedBtn] = useState(headersButtons[0]);
  const { output, error, message, status } = useSelector(
    (state: RootState) => state.codeOutput,
  );

  return (
    <>
      {/* headers */}
      <header className="flex items-center gap-2 w-full text-xs py-2 px-4 bg-zinc-800">
        {headersButtons.map((btn, index) => (
          <>
            <button
              key={index}
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
          </>
        ))}
      </header>

      {/* body */}
      {selectedBtn === 'output' && (
        <div className="w-full h-full bg-[#0d1117] p-4 font-mono text-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Output Console
            </p>

            {(status || error) && (
              <span
                className={cn(
                  'text-xs px-2 py-0.5 rounded',
                  error
                    ? 'bg-red-500/10 text-red-400'
                    : 'bg-green-500/10 text-green-400',
                )}
              >
                {status}
              </span>
            )}
          </div>

          {/* Output */}
          {output && (
            <pre className="text-green-400 whitespace-pre-wrap mb-2">
              {output}
            </pre>
          )}

          {/* Error */}
          {error && (
            <pre className="text-red-400 whitespace-pre-wrap mb-2">
              ❌ {error}
            </pre>
          )}

          {/* Message */}
          {message && (
            <pre className="text-gray-400 whitespace-pre-wrap">{message}</pre>
          )}
        </div>
      )}
    </>
  );
};

export default Terminal;
