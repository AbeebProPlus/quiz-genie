import React,{useState} from "react";
import Logo from "./Logo";
import quiz_data from "./quiz_data";
import Footer from "./Footer.js";

function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(0);

    function handleclick(correct) {
        if (correct === true) {
            setResult(result + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quiz_data.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowResult(true);
        }
    }
    function handleReset() {
        setCurrentQuestion(0)
        setResult(0)
        setShowResult(false)
    }


    return (
        <div>
            <Logo />
            <div className="quiz-section">
                {showResult ? <div><h3>You scored {result} out of {quiz_data.length}</h3></div>:
                <div>   
                    <h3>Question {currentQuestion + 1} of {quiz_data.length}</h3>
                    <h4>{quiz_data[currentQuestion].question}</h4>
                    {quiz_data[currentQuestion].answerOptions.map(option => 
                    <button onClick = {() => handleclick(option.correct)}>{option.answer}</button>)}
                </div>
                }
                <button className ="reset-btn" onClick ={handleReset}> Reset</button>
            </div> 
            <Footer />
        </div>
    )
}

export default App;