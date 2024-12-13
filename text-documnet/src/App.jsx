import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [documentText, setDocumentText] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const textareaRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      e.preventDefault();
      setDocumentText([...documentText, text]);
      setHighlightedIndex(documentText.length);
      setText('');
    }
  };

  useEffect(() => {
    let timer;
    if (highlightedIndex !== null) {
      timer = setTimeout(() => {
        setHighlightedIndex(null);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [highlightedIndex]);

  return (
    <>
      <div className="flex items-center justify-center text-4xl underline">
        Text - document problem
      </div>
      {/* text area */}
      <textarea
        ref={textareaRef}
        placeholder='Enter the text here'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <div>
        {documentText.map((item, index) => (
          <p
            key={index}
            className='text-2xl'
            style={{ backgroundColor: index === highlightedIndex ? 'yellow' : 'white' }}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default App;