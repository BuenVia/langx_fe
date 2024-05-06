import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Practice = () => {

    const [sentences, setSentences] = useState([])

    let {id} = useParams()
    const sentenceUrl = `http://127.0.0.1:8000/api/practice/${id}`

    const getSentences = async () => {
        try {
            axios.get(sentenceUrl).then(res => setSentences(res.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSentences()
    })

    return (
        <div>
            <h1>Practice</h1>
            {sentences.length > 0 ? 
            sentences.map(sentence => {
                return <p key={sentence.id}>{sentence.sentence_spa}</p>
            }) :
            <p>Nothing to return</p>}
        </div>
    )
  };
  
  export default Practice;