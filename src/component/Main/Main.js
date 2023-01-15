import{useState, useEffect} from "react"

export default function Main(){
    const [data, setData] = useState([]);
  
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
          .then(response => response.json())
          .then(data => setData(data.results))
          .catch(error => console.log(error))
      }, []);
      const question = data.map(item => 
      [<p>{item.question}</p>,
      <p>{item.correct_answer}</p>]
      )
    return(
        <>
            {question}
            <h1>&quot; &shy;</h1>
        </>
    )
}