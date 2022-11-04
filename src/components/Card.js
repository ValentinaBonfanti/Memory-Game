import "./Card.css";

export default function Card({ card, handleChoice, flipped, disabled }) {

 function handleClick() {
    if(!disabled) {
        handleChoice(card)
    }
}

 return(
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt='card front'/>
        <img className='back' src='/img/logo hog.jpg' onClick={handleClick} alt='card back'/>
      </div>
    </div>
    )
   
}