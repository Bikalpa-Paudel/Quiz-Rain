import{useState, useEffect} from "react"
import "./Main1.css"
export default function Main1(){
    const [data, setData] = useState([]);
    const [color, setColor] = useState('#F5F7FB')
  
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
          .then(response => response.json())
          .then(data => setData(data.results))
          .catch(error => console.log(error))
      }, [])



    function changeColor(){
        setColor(color === '#F5F7FB' ? "#D6DBF5" : '#F5F7FB')
    }
      const question = data.map(item => (
        <div className="qna">
            <h2 className="question">{item.question}</h2>
            <div className="answers">
                {item.incorrect_answers.map(item1 => (
                     <p style={{backgroundColor: color}} onClick={changeColor} className="ans">{item1}</p>
                ))}
                <p style={{backgroundColor: color}} onClick={changeColor}  className="ans crt-ans">{item.correct_answer}</p>
            </div>
           <div className="bottom-line"></div>

        </div>
    ))
    return (
    <div className="main-container">
        <div>
          {question}
        </div>
    </div>
    )
}
