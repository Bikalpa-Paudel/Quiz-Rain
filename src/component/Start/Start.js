import "./Start.css"


export default function Start(props){
    return(
        <div className="start">
            <h1 className="quiz">Quiz Mania</h1>
            <h3 className="quiz-dis">Test your general knowldge with Quiz Mania</h3>
            <div onClick={props.togglePage} className="start-btn">Start Quiz</div>
        </div>
    )
}