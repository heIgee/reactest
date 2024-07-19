import { useState } from "react";

export default function FaceCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ fontSize: '8rem' }}>
      <p
        style={{ margin: '0', userSelect: 'none' }}
        onClick={() => {
          setIsHappy(!isHappy);
          setCounter((curr) => curr + 1);
        }}
      >
        {isHappy ? '😊' : '😞'}
      </p>
      <small>{counter}</small>
    </div>
  );
}