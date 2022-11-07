import { useEffect, useState } from 'react'
import './App.css';
import Card from './components/Card';

const cardImages = [
  { "src": "/img/harry.png", matched: false },
  { "src": "/img/hermione.png", matched: false },
  { "src": "/img/draco.png", matched: false },
  { "src": "/img/hagrid.png", matched: false },
  { "src": "/img/dumbledor.png", matched: false },
  { "src": "/img/ron.png", matched: false }
]

function App() {

   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);
   const [choiceOne, setChoiceOne] = useState(null);
   const [choiceTwo, setChoiceTwo] = useState(null);
   const [disabled, setDisabled] = useState(false)

   // 3 cosas: duplicate each card once because we need two of each card (so a user can match them together); it's going to randomize
  // the order of the cards in the array using the sort method; it's going to apply a random id to each of the 12 cards and
  //we'll use the id as a key for react when we're outputting them later in some kind of list.
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice
const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
 }

 //reset choices and increase turns
 const resetTurn = () => {
  setChoiceOne(null);
  setChoiceTwo(null);
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
 }

 //compare 2 selected cards
 useEffect(() => {
  
  if(choiceOne && choiceTwo) {
    setDisabled(true)
    if(choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src){
            return {...card, matched: true}
          } else{
            return card
          }
        })
      })
      resetTurn()
    }else{
     setTimeout(() => {
      resetTurn()
     }, 1000); 
    }
  }
 }, [choiceOne, choiceTwo]);

 //para q aparezcan las card automaticamente
 useEffect(() => {
  shuffleCards()
  }, [])

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
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
            />
          ))
        }
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
