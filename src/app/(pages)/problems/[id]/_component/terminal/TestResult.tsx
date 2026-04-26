'use client';

import { useParams } from 'next/navigation';
import problems from '@/lib/problems.json';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from 'react-icons/md';
import TestCaseLoader from './TestCaseLoader';

interface iProps {
  status: string | null;
  error: string | null;
  message: string | null;
  output: string | null;
  loading: boolean;
}

const TestResult = ({ status, error, message, output, loading }: iProps) => {
  const { id: problemId } = useParams();
  const problem =
    problems && problems.find((p) => String(p.id) === String(problemId));

  const [selectedTestCase, setSelectedTestCase] = useState(
    problem?.testCases[0].id,
  );
  const [viewError, setViewError] = useState(false);

  if (!problem) return <p>No problem found!</p>;

  const isExicuted = error || message || output || status;


  return !isExicuted ? (
    <div className="w-full h-[calc(100%-28px)] flex items-center justify-center">
      <p className="text-xs text-muted-foreground">
        You must run your code first
      </p>
    </div>
  ) : loading ? (
    <TestCaseLoader />
  ) : (
    <>
      {!error ? (
        <header className="flex items-center gap-2">
          {problem.testCases.map((tc) => {
            const result =
              output &&
              JSON.parse(output).find((o) => selectedTestCase === o.test.test);

            return (
              <button
                key={tc.id}
                onClick={() => setSelectedTestCase(tc.id)}
                className={cn(
                  'hover:bg-zinc-700 duration-200 rounded py-1 px-2.5 cursor-pointer',
                  selectedTestCase === tc.id
                    ? result?.test?.success
                      ? 'bg-zinc-800 text-white'
                      : 'text-red-400 bg-red-500/10'
                    : result?.test?.success
                      ? 'text-red-400'
                      : 'text-white',
                )}
              >
                Case {tc.id}
              </button>
            );
          })}
        </header>
      ) : (
        <p className="font-medium text-red-400 text-lg mb-3">{status}</p>
      )}

      <div className="flex flex-col mt-5 gap-5 pb-5">
        {/* error */}
        {error && (
          <div className="bg-red-500/5 p-4 rounded-md">
            <pre
              className={cn(
                'text-red-400 whitespace-pre-wrap mb-2 overflow-hidden',
                !viewError ? 'max-h-35' : 'max-h-auto',
              )}
            >
              ❌ {error}
            </pre>
            <button
              onClick={() => setViewError((prev) => !prev)}
              className="flex items-center gap-1 w-full justify-center text-xs cursor-pointer text-muted-foreground"
            >
              {!viewError ? (
                <MdKeyboardDoubleArrowDown size={15} />
              ) : (
                <MdKeyboardDoubleArrowUp size={15} />
              )}
              {viewError ? 'View Less' : 'View More'}
            </button>
          </div>
        )}

        {problem.testCases.map((tc) => {
          const result =
            output && JSON.parse(output).find((o) => o.test.test === tc.id);

          return (
            selectedTestCase === tc.id && (
              <div key={tc.id} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p>Input =</p>
                  <Card className="rounded bg-zinc-800 border-none">
                    <CardContent>{JSON.stringify(tc.input)}</CardContent>
                  </Card>
                </div>

                {!error && (
                  <div className="flex flex-col gap-2">
                    <p>Output =</p>
                    <Card className="rounded bg-zinc-800 border-none">
                      <CardContent
                        className={cn(
                          result?.test?.success
                            ? 'text-green-400'
                            : 'text-red-400',
                        )}
                      >
                        {JSON.stringify(result?.output)}
                      </CardContent>
                    </Card>

                    <p>Expected =</p>
                    <Card className="rounded bg-zinc-800 border-none">
                      <CardContent>{JSON.stringify(tc.output)}</CardContent>
                    </Card>
                  </div>
                )}
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default TestResult;
