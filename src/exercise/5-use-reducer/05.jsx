import { useReducer } from 'react';

const REDUCER_ACTIONS = {
  PLUS: 'plus',
  MINUS: 'minus',
  RESET: 'reset',
};

const reducer = (value, { action, operation }) => {
  switch (action) {
    case REDUCER_ACTIONS.PLUS:
      return value + operation;
    case REDUCER_ACTIONS.MINUS:
      return value - operation;
    case REDUCER_ACTIONS.RESET:
      return 0;
    default:
      throw new Error('pas ça');
  }
};

const Counter = () => {
  // 🦁 Remplace ceci par un useReducer avec `reducer` en paramètre et `0` en initialState
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({ action: REDUCER_ACTIONS.MINUS, operation: 5 })
        }
      >
        -5
      </button>
      <button
        onClick={() =>
          dispatch({ action: REDUCER_ACTIONS.MINUS, operation: 1 })
        }
      >
        -1
      </button>
      <button>{count}</button>
      <button
        onClick={() => dispatch({ action: REDUCER_ACTIONS.PLUS, operation: 1 })}
      >
        +1
      </button>
      <button
        onClick={() => dispatch({ action: REDUCER_ACTIONS.PLUS, operation: 5 })}
      >
        +5
      </button>
      <button onClick={() => dispatch({ action: REDUCER_ACTIONS.RESET })}>
        Reset
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
