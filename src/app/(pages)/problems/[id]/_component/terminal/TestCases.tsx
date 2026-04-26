'use client';

import { useParams } from 'next/navigation';
import problems from '@/lib/problems.json';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const TestCases = () => {
  const { id: problemId } = useParams();
  const problem =
    problems && problems.find((p) => String(p.id) === String(problemId));

  const [selectedTestCase, setSelectedTestCase] = useState(0);

  if (!problem) return <p>No problem found!</p>;

  return (
    <>
      <header className="flex items-center gap-2">
        {problem.testCases.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelectedTestCase(i)}
            className={cn(
              'hover:bg-zinc-700 duration-200 rounded py-1 px-2.5 cursor-pointer',
              selectedTestCase === i && 'bg-zinc-800',
            )}
          >
            Case {i + 1}
          </button>
        ))}
      </header>

      <div className="mt-7 flex flex-col gap-5 pb-5">
        {problem.testCases.map(
          (tc, idx) =>
            selectedTestCase === idx && (
              <div key={idx} className="flex flex-col gap-3">
                <p>Input =</p>
                <Card className="rounded bg-zinc-800 border-none">
                  <CardContent>{JSON.stringify(tc.input)}</CardContent>
                </Card>
                <p>Expected =</p>
                <Card className="rounded bg-zinc-800 border-none">
                  <CardContent>{JSON.stringify(tc.output)}</CardContent>
                </Card>
              </div>
            ),
        )}
      </div>
    </>
  );
};

export default TestCases;
