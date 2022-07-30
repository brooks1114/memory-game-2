
import './SingleCard.css'

// do not forget the {} here. passing in the card and the function which can then be used in a a local function. see pass handleChoice use in handleClick then it calls handleChoice in app.js
export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    // Example of a call back to another File. the other file has state on it, so this will update state even though state does not exist in this file.   
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img
                    className="back"
                    src="/img/cover.png"
                    onClick={handleClick}
                    alt="card back" />
            </div>
        </div>
    )
}