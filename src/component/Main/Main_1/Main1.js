import React, { useState, useEffect } from "react";
import "./Main1.css";

const Main1 = () => {
  const [data, setData] = useState([]);
  const [color, setColor] = useState("#F5F7FB");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);


  function changeColor(event) {
    setColor(color === "#F5F7FB" ? "#D6DBF5" : "#F5F7FB");
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }



  const questions = data.map((item) => (
    <div className="qna">
      <h2 className="question">{item.question}</h2>
      <div className="answers">
        {item.incorrect_answers.map((item1) => (
          <>
            <p
              style={{ backgroundColor: color }}
              onClick={changeColor}
              className="ans"
              >
              {item1}
            </p>

          </>
          
        ))}

          <p
              style={{ backgroundColor: color }}
              onClick={changeColor}
              className="ans"
              >
              {item.correct_answer}
          </p>

      </div>
      <div className="bottom-line"></div>
    </div>
  ));

  return (
    <div className="main-container">
      <div>{questions}</div>
    </div>
  );
};

export default Main1;
