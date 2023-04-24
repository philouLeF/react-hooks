/* eslint-disable no-unused-vars */ // 🦁 Enlève cette ligne
import { useState, useRef, useEffect } from 'react';

const useDebounce = (callback, time) => {
  const timeoutRef = useRef(null);

  const onDebounce = (...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, time);
  };

  return onDebounce;
};

const useRenderCount = () => {
  const renderCountRef = useRef(0);
  useEffect(() => {
    renderCountRef.current += 1;
  });

  return renderCountRef;
};

const fetchAgeByName = (name) => {
  return fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
};

const App = () => {
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);
  const renderCountRef = useRenderCount();

  const onSearch = useDebounce((value) => {
    fetchAgeByName(inputRef.current.value).then((data) => {
      setResult(data);
    });
  }, 500);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search bar"
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
      {result ? (
        <div style={{ padding: 16 }}>
          The age for <b>{result.name}</b> is <b>{result.age}</b> and there is{' '}
          <b>{result.count}</b> people with this name.
        </div>
      ) : null}
      <p>The component render {renderCountRef.current} times</p>
    </div>
  );
};

export default App;
