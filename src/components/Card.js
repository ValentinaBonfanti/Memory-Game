import "./Card.css";

export default function Card({ card }) {
    return(
    <div className="card">
      <div>
        <img className='front' src={card.src} alt='card front'/>
        <img className='back' src='/img/logo hog.jpg' alt='card back'/>
      </div>
    </div>
    )
   
}