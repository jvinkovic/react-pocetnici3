

import CountRootComponent from './Event/CountRootComponent';
import MyList from './List/MyList';

function App() {
  return (
    <div>
      <div>
        <MyList />
      </div>
      <hr/>
      <h3>Osobe</h3>

      <hr/>
      <p>
        <CountRootComponent />
      </p>   
    </div>
  );
}

export default App;
