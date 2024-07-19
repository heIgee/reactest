import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {

  const setupPlayers = () => (
    Array(numPlayers).fill(null).map(() => { return { id: uuid(), score: 0 }; })
  );

  const [players, setPlayers] = useState(setupPlayers);

  const hit = (id) => {
    setPlayers(players.map(p => {
      if (p.id === id) {
        return { ...p, score: p.score + 1 };
      }
      else {
        return p;
      }
    }));
  };

  const kill = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  return (
    <>
      <ul style={{ textAlign: 'start', fontFamily: 'monospace' }}>
        {
          players.map(p =>
            <li
              style={p.score >= target ? { color: 'palegoldenrod' } : {}}
              key={p.id}
              onContextMenu={(ev) => { ev.preventDefault(); kill(p.id); }}>
              <button
                style={{ margin: '0 1rem', padding: '0 0.5em ' }}
                onClick={() => { hit(p.id); }}>
                +
              </button>
              [{p.score}] Player [{p.id.slice(0, 4)}]
              {p.score >= target && <bold> Winner!</bold>}
            </li>)
        }
      </ul>
      <button onClick={() => { setPlayers(setupPlayers()); }}>Reset</button>
    </>
  );
}