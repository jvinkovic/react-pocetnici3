import ShowText from "./Components/ShowText";
import ShowMeTheMoney from "./Components/ShowMeTheMoney";
import ArrowFunc from './Components/ArrowFunc';

function App() {
  return (
    <div>
      <div>
        <ShowText ime='Pero' pozdrav='Dobro jutro' />
        <ShowMeTheMoney money={67} />
        <ArrowFunc />
      </div>
        <ShowMeTheMoney money={104} />
    </div>
  );
}

export default App;