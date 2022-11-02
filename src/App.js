import { useState } from 'react'
import './App.css';
import Card from './components/Card';

const cardImages = [
  { "src": "/img/harry.png", matched: false },
  { "src": "/img/hermione.png", matched: false },
  { "src": "/img/draco.png", matched: false },
  { "src": "/img/hagrid.png", matched: false },
  { "src": "/img/dumbledor.jpg", matched: false },
  { "src": "/img/ron.webp", matched: false }
]

function App() {

   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0)

   // 3 cosas: duplicate each card once because we need two of each card (so a user can match them together); it's going to randomize
  // the order of the cards in the array using the sort method; it's going to apply a random id to each of the 12 cards and
  //we'll use the id as a key for react when we're outputting them later in some kind of list.
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

    // setChoiceOne(null)
    // setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards, turns)
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {
          cards.map((card) => (
            <Card 
            key={card.id}
            card={card}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
