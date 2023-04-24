import { useState } from 'react';

const useStateHistory = () => {
  const [history, setHistory] = useState([]);

  const addHistory = (value = '-') => {
    setHistory((prev) => [...prev, value]);
  };

  const deleteHistory = (index) => {
    if (typeof index !== 'number') return;

    setHistory((current) => {
      current.splice(index, 1);
      return [...current];
    });
  };

  return { history, addHistory, deleteHistory };
};

const App = () => {
  const [name, setName] = useState('');
  const [isNameReversed, setIsNameReversed] = useState(false);
  const { history, addHistory, deleteHistory } = useStateHistory();

  const handleChange = (event) => {
    setName(event.target.value);
    addHistory(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        checked={isNameReversed}
        onChange={(event) => {
          setIsNameReversed(event.target.checked);
        }}
      />
      <Name name={name} isNameReversed={isNameReversed} />
      <ul>
        {history.map((name, index) => (
          <li key={index} onClick={() => deleteHistory(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Name = ({ name, isNameReversed }) => {
  if (!name) {
    return 'Write your name';
  }

  return `Hello ${isNameReversed ? name.split('').reverse().join('') : name}`;
};

export default App;
