import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/editor';

type TuiEditorWithForwardedRef = {
  initialValue: string;
  onChange(value: string): void;
} & React.RefAttributes<unknown>;

const ToastUIEditor = forwardRef<Editor, TuiEditorWithForwardedRef>(({ initialValue, onChange }, ref) => {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (editorRef.current === null) {
      editorRef.current = new Editor({
        el: document.querySelector('#editor') as HTMLElement,
        previewStyle: 'vertical',
        initialEditType: 'markdown',
        toolbarItems: [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
          ['scrollSync'],
        ],
        initialValue,
        // theme: 'dark',
        height: '80vh',
        events: {
          change: () => {
            if (editorRef.current !== null) {
              const value = editorRef.current.getMarkdown();
              onChange(value);
            }
          },
        },
      });
    }
  }, [initialValue, onChange]);

  return <div id="editor" />;
});

export default ToastUIEditor;
