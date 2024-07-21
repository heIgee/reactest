import { useState } from "react";

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(() => colors.random());
  return (
    <div
      style={{ backgroundColor: color }}
      onMouseOver={() => setColor(() => colors.random())}>
    </div>
  );
}