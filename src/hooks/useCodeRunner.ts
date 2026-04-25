'use client';

import { setCodeOutput } from '@/features/codeOutputSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const codeExicuteUrl = 'https://ce.judge0.com/submissions';

const useCodeRunner = () => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState(false);

  const handleRunCode = async (code: string, langId: number | string) => {
    try {
      setPending(true);
      dispatch(setCodeOutput({ status: "Pending...", output: "", error: "", message: "" }));
      const res = await fetch(codeExicuteUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source_code: code, language_id: langId }),
        cache: 'no-store',
      });

      const { token } = await res.json();

      if (!token) return;

      let result = null;

      while (true) {
        const res = await fetch(
          `${codeExicuteUrl}/${token}?base64_encoded=false`,
          { cache: 'no-store' },
        );
        result = await res.json();

        if (result.status.id > 2) break;
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      dispatch(
        setCodeOutput({
          output: result.stdout,
          error: result.stderr,
          message: result.message,
          status: result.status.description,
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
        }),
      );
      setPending(false);
      throw new Error(error.message);
    } finally {
      setPending(false);
    }
  };

  return { handleRunCode, pending };
};

export default useCodeRunner;