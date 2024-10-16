import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow.js';

function App() {

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />
    }
  );

  // const setAnimals = (animal) => {
  //   animals.add(animal);
  // }

  const getRandomAnimal = () => {
    const animals = ['bird', 'cat','cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
 } 

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      {/*loop through animals*/}
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );

 }

export default App;
