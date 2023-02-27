import { SketchPicker, AlphaPicker } from 'react-color'
import random from 'random'

import ShowText from "./Components/ShowText";
import ShowMeTheMoney from "./Components/ShowMeTheMoney";
import ArrowFunc from './Components/ArrowFunc';
import PopisOsoba from './Z1/PopisOsoba';

const osobe = [
  {ime: 'Pero', prezime: 'Perić', godine: 45},
  {ime: 'Maja', prezime: 'Majić', godine: 21},
];

function App() {

  var rand = random.int(45, 888);

  return (
    <div>
      <div>
        <ShowText ime='Pero' pozdrav='Dobro jutro' />
        <ShowMeTheMoney money={67} />
        <ArrowFunc />
      </div>
        <ShowMeTheMoney money={104} />
        <hr/>
        <PopisOsoba popis={osobe} />
        <hr/>
        <SketchPicker />
        <AlphaPicker />
        <hr/>
        {rand}
    </div>
  );
}

export default App;