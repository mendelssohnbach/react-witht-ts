import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: '青森　林檎',
      age: 35,
      img: 'https://1.bp.blogspot.com/-lHRPkB0jHpo/X9lJaJuPoII/AAAAAAABc4s/8N-scv9VYy8F5tSfeT_j3Fwr_i576o3qwCNcBGAsYHQ/s851/kutsuhimo_musubu_woman.png',
      note: '靴紐を結ぶ人のイラスト',
    },
    {
      name: '宮崎　日向夏',
      age: 42,
      img: 'https://1.bp.blogspot.com/-CsIfPILyclY/X4aVxH-QjyI/AAAAAAABb0M/8I8jvxCNOg8xKGF0HaHQlzNKbWGiF6angCNcBGAsYHQ/s400/yubibue_boy.png',
      note: '親指と人差指をくわえて口笛を鳴らしている',
    },
  ]);

  return (
    <div className="App">
      <h1>私の身近な有名人</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
