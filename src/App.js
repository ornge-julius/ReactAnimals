import { useState } from 'react';


function App() {

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  // const setAnimals = (animal) => {
  //   animals.add(animal);
  // }

  const getRandomAnimal = () => {
    const animals = ['bird', 'cat','cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
 } 

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );

 }

export default App;
