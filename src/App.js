import { useState } from 'react';
import CountRootComponent from './Event/CountRootComponent';
import MyList from './List/MyList';
import OsobeList from './List/OsobeList';

function App() {
  const [name, setName] = useState("Neki tekst");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  }

  return (
    <div>
      <div>
        <MyList />
      </div>
      <hr/>
      <h3>Osobe</h3>
      <OsobeList />
      <hr/>
      <div>
        <CountRootComponent />
      </div>
      <hr/>
      <button onClick={() => setName('Button kliknut')}>Klik</button>
      <input value={name} onChange={handleChange} />
      {/* doljnji input funkcionira isto kao i gornji */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
