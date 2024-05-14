import { useState } from "react"

const Card = (props) => {

    const [cardIndex, setCardIndex] = useState(0)

    function handleClick() {
        
    }

    return (
        <div>
            <p>Card</p>
            <p>{props.sentences[cardIndex].sentence_spa}</p>
            <input type="text" />
            <button onClick={nextCard}>Submit</button>
        </div>
    )
}

export default Card