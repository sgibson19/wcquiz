import React, {useState, useContext} from 'react';
import EndScreen from './EndScreen';
import MainMenu from './MainMenu';
import Quiz from './Quiz';

import {QuizContext} from "./Helpers/Contexts";

function QuizApp() {
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);

    return (
        <div className="QuizApp">
            <h1>World Cup Quiz</h1>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <Quiz />}
                {gameState === "endScreen" && <EndScreen />} 
            </QuizContext.Provider>

              
        </div>
    );
}

export default QuizApp;
