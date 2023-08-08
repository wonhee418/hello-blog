import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
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
        plugins: [[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax],
        initialValue,
        // theme: 'dark',
        height: '80vh',
        events: {
          change: () => {
            if (editorRef.current !== null) {
              const value = editorRef.current.getHTML();
              console.log(value);
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
