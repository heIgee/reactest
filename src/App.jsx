import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import SlotMachine from './SlotMachine';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import FaceCounter from './FaceCounter';
import ColorGrid from './ColorGrid';
import ScoreKeeper from './ScoreKeeper';
import './App.css';

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

// const colors = [
//   "#E53935", "#E91E63", "#9C27B0", "#673AB7",
//   "#3F51BF", "#2196F3", "#03A9F4", "#00BCD4",
//   "#009688", "#4CAF50", "#8BC34A", "#CDDC39",
//   "#FFEB3B", "#FF9800", "#FF5722", "#FACD78"
// ];

const colors = ['white', 'black'];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ScoreKeeper numPlayers={5} target={5} />

      {/* <ColorGrid colors={colors} width="100%" height="100%" cols={44} rows={27} /> */}

      {/* <FaceCounter /> */}

      {/* <Clicker message="Goodbye!" content="Helo!" /> */}

      {/* <PropertyList properties={properties} />
      <SlotMachine /> */}

      {/* <div >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ color: 'yellow' }}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
