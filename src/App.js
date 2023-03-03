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
      <input value={name} onChange={handleChange} />
    </div>
  );
}

export default App;
