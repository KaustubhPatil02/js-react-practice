import React, { useState } from 'react';
import './doc.css'
export const Document = () => {
  const [text, setText] = useState('');
  const [document, setDocument] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    if (!loading) {
      setLoading(true);
      e.preventDefault();
      insertTextInDocument();
      setText('');
    }
  };

  const insertTextInDocument = () => {
    let newDoc = `<span class="paragraph-highlight-class">${text}</span>`;
    setDocument(document + ' ' + newDoc);
    removeHighlightAfterTime();
  };

  const removeHighlightAfterTime = () => {
    setTimeout(() => {
      setDocument((doc) => {
        let d = doc.replace(` class="paragraph-highlight-class"`, '');
        setLoading(false);
        return d;
      });
    }, 2000);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <form onSubmit={handleSubmit}>
          <textarea
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.which === 13) {
                handleSubmit(e);
              }
            }}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            rows={5}
          ></textarea>
        </form>
      </div>
      <div className="p-4 border border-gray-300 rounded">
        <p className="mb-2 text-xl">Document</p>
        {document ? (
          <div
            className="document-body"
            dangerouslySetInnerHTML={{
              __html: document,
            }}
          ></div>
        ) : (
          <div
            className="text-center text-gray-400 document-body"
          >
            Added content will show here
          </div>
        )}
      </div>
    </div>
  );
};

export default Document; 