import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
  const [userInpout, setUserInpout] = React.useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(userInpout) || 0;
  const resetAll = () => {
    dispatch(reset());
    setUserInpout(0);
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <input
        type='txet'
        value={userInpout}
        onChange={(e) => setUserInpout(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
