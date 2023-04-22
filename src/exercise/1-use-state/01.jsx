import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [isNameReversed, setIsNameReversed] = useState(false);
  const [nameHistory, setNameHistory] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
    setNameHistory((current) => [...current, event.target.value]);
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
        {nameHistory.map((name, i) => (
          <li key={i}>{name}</li>
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
