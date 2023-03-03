import CountRootComponent from './Event/CountRootComponent';
import MyList from './List/MyList';
import OsobeList from './List/OsobeList';

function App() {
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
    </div>
  );
}

export default App;
