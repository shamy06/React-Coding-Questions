import React, { useState } from "react";
import { Questions } from "./questions";
const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [flag,setFlag] = useState(true);

    const { questionText, answerOptions } = Questions[activeQuestion]
    const totalQuestions = Questions.length;

    const onClickNext = () => {
        if (activeQuestion < totalQuestions - 1) {
            setActiveQuestion(prev => prev + 1)
        }
    }

    const finalResult = () => {
        setFlag(false)
    }

    const onAnswerSelected = (answer) => {
        if (answer.isCorrect) {
            setCorrectAnswer(prev => prev + 1);
        }
    }

    return (
        <div className="quiz-container">
            <h1>!! Fun Quizes !!</h1>
            {flag ?
                <>
                    <h2>{activeQuestion + 1} {questionText}</h2>
                    <ul>
                        {answerOptions.map((item,index) => (
                            <li onClick={() => onAnswerSelected(item)} key={item.answerText} className='selectedAnswer' >
                                {item.answerText}
                            </li>
                        ))}
                    </ul>
                    {totalQuestions - 1 === activeQuestion ?
                        <button onClick={finalResult} className="btn">Submit</button> :
                        <button onClick={onClickNext} className="btn">Next</button>
                    }
                </>
                :
                <h1>
                    Score {correctAnswer}/ {totalQuestions}
                </h1>
        }
        </div>
    )
}

export default Quiz;