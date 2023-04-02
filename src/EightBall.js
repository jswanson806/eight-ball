import React, { useState } from "react";
import "./EightBall.css"


const EightBall = ({ answers }) => {
   
    const genRandom = () => Math.floor(Math.random() * 20);
    const showAnswer = () => {
        // gen random number from 0-20 exclusive
        const answerIdx = genRandom();
        // find answer message at random index
        setAnswer(answers[answerIdx].msg);
        // update the background color 
        setColor(answers[answerIdx].color);
        setTextColor("black")
    }

    // define useState for answer, color, and textColor
    const [answer, setAnswer] = useState("Think of a Question");
    // default colors: white text against black background
    const [color, setColor] = useState("black");
    const [textColor, setTextColor] = useState("white");


    return (
        <div>
            <h1>Magic EightBall</h1>
            <div className="EightBall" onClick={showAnswer} style={{backgroundColor: color}} >
                <h4 className="EightBall-answer" style={{color: textColor}}>{answer}</h4>
            </div>
        </div>
    )
}

export default EightBall;