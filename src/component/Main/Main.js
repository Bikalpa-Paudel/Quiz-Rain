import{useState, useEffect} from "react"
import "./Main.css"
export default function Main(){
    const [data, setData] = useState([]);
  
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
          .then(response => response.json())
          .then(data => setData(data.results))
          .catch(error => console.log(error))
      }, [])

      const question = data.map(item => (
        <div className="qna">
            <h2 className="question">{item.question}</h2>
            <div className="answers">
                <p className="ans crt-ans">{item.correct_answer}</p>
                {item.incorrect_answers.map(item1 => (
                    <p className="ans">{item1}</p>
                ))}
            </div>
            <div className="bottom-line"></div>

        </div>
    ))
    return(
    <div className="main-container">
            <div>
              {question}
            </div>
    </div>
    )
}