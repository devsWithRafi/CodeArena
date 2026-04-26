'use client';

import { Editor } from '@monaco-editor/react';
import { useEffect, useRef } from 'react';
import type * as monacoEditor from 'monaco-editor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { defaultCodeSnippets } from '@/lib/languageList';
import { setCodeContent } from '@/features/codeSlice';
import { languageType } from '@/features/selectedLanguageSlice';
import problems from '@/lib/problems.json';

const CodeEditor = ({ problemId }: { problemId: string }) => {
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
    null,
  );

  const { language }: languageType = useSelector(
    (state: RootState) => state.selectedLanguage,
  );
  const dispatch = useDispatch();

  const problem = problems.find((p) => String(p.id) === String(problemId));

  const handleEditorDidMount = (
    editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor,
  ) => {
    editorRef.current = editor;
    dispatch(setCodeContent(editorRef.current.getValue()));
  };

  useEffect(() => {
    // const newCode = defaultCodeSnippets[language || 'javascript'];
    const newCode = problem?.starterCode || '';
    if (editorRef.current) editorRef.current.setValue(newCode);

    dispatch(setCodeContent(newCode));
  }, [language]);

  return (
    <div className="h-full">
      <Editor
        height="100%"
        language={language || 'javascript'}
        // value={defaultCodeSnippets[language || 'javascript']}
        value={problem?.starterCode || ''}
        onMount={handleEditorDidMount}
        theme="vs-dark"
        onChange={(value) => dispatch(setCodeContent(value || ''))}
      />
    </div>
  );
};

export default CodeEditor;
