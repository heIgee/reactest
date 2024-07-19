import { v4 as uuid } from 'uuid';
import ColorBox from './ColorBox';

export default function ColorGrid({ colors, cols = 5, rows = 5, width = '20rem', height = '20rem' }) {
  return (
    <div style={{
      backgroundColor: 'grey',
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      width: `${width}`,
      height: `${height}`
    }}>
      {
        Array(cols * rows).fill(null).map(() =>
          <ColorBox key={uuid()} colors={colors} />)
      }
    </div>
  );
}

