'use client';

import { setCodeOutput } from '@/features/codeOutputSlice';
import problems from '@/lib/problems.json';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

interface problemType {
  id: number;
  title: string;
  language: string;
  functionName: string;
  description: string;
  difficulty: string;
  tags: string[];
  starterCode: string;
  testCases: {
    input: number[];
    output: number;
  }[];
}

const codeExicuteUrl = 'https://ce.judge0.com/submissions';

const buildCode = (userCode: string, problem: problemType): string => {
  if (!problem) return '';

  return `
  ${userCode}
  
  const testCases = ${JSON.stringify(problem.testCases)}

  const results = testCases.map((t, i) => {
      const result = ${problem.functionName}(...t.input);
      const passed = JSON.stringify(result) === JSON.stringify(t.output);

      if(passed) return {
        test: { test: i+1, status: 'Passed', success: true },
        output: result
      };
      else return {
        test: { test: i+1, status: 'Failed', success: false },
        output: result
      };
  })

  console.log(JSON.stringify(results))
  `;
};

const useCodeRunner = () => {
  const dispatch = useDispatch();
  const problemId = useParams().id;
  const problem =
    problems && problems.find((p: problemType) => String(p.id) === String(problemId));

  const handleRunCode = async (code: string, langId: number | string) => {
    try {
      dispatch(
        setCodeOutput({
          status: 'Pending...',
          loading: true,
          output: '',
          error: '',
          message: '',
        }),
      );

      if (!code) return;

      const usersCode = buildCode(code, problem!);

      const res = await fetch(codeExicuteUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ source_code: code, language_id: langId }),
        body: JSON.stringify({ source_code: usersCode, language_id: langId }),
        cache: 'no-store',
      });

      const { token } = await res.json();

      if (!token) return;

      let result = null;
      let attempt = 0;

      while (attempt < 10) {
        const res = await fetch(
          `${codeExicuteUrl}/${token}?base64_encoded=false`,
          { cache: 'no-store' },
        );
        result = await res.json();

        if (result.status.id > 2) break;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        attempt++;
        if (attempt === 10) {
          throw new Error('Execution timeout');
        }
      }

      dispatch(
        setCodeOutput({
          output: result.stdout,
          error: result.stderr,
          message: result.message,
          status: result.status.description,
          loading: false,
          token: result.token,
        }),
      );
    } catch (error: any) {
      dispatch(
        setCodeOutput({
          output: '',
          error: 'Something went wrong',
          message: error.message,
          status: 'Error',
          loading: false,
        }),
      );
      throw new Error(error.message);
    } finally {
    }
  };

  return { handleRunCode };
};

export default useCodeRunner;
