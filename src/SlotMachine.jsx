export default function SlotMachine() {
  const elems = ['🍇', '🍈', '🍉'];

  // const shot = [
  //   elems[Math.random() * elems.length | 0],
  //   elems[Math.random() * elems.length | 0],
  //   elems[Math.random() * elems.length | 0]
  // ];

  console.log(Array(3));
  console.log(...Array(3));
  console.log([Array(3)]);
  console.log([...Array(3)]);

  // const shot = [...Array(3).map(s => elems[Math.random() * elems.length | 0])];
  const shot = [...Array(3)].map(_ => elems[Math.random() * elems.length | 0]);

  const hasWon = shot.every(s => s === shot[0]);

  console.log(shot);
  console.log({ hasWon });

  return (
    <>
      {
        hasWon
          ? <>
            <h1 style={{ color: "yellow" }}>You won!</h1>
            <p>here is your nothing</p>
          </>
          : <h2 style={{ color: "teal" }}>Bring more money!</h2>
      }
      {shot.map(s => <span key={shot.indexOf(s)} style={{ fontSize: "2rem" }}>{s}</span>)}
    </>
  );
}