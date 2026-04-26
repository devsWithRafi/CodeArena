import { cn } from '@/lib/utils';
import TestCaseLoader from './TestCaseLoader';

interface iProps {
  status: string | null;
  error: string | null;
  message: string | null;
  output: string | null;
  loading: boolean;
}

const OutputBody = ({ status, error, message, output, loading }: iProps) => {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
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

      {loading ? (
        <TestCaseLoader />
      ) : (
        <>
          {/* Output */}
          {output && (
            <pre className="text-gray-200 whitespace-pre-wrap mb-2">
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
            <pre className="text-gray-400 whitespace-pre-wrap pb-5">
              {message}
            </pre>
          )}
        </>
      )}
    </>
  );
};

export default OutputBody;
