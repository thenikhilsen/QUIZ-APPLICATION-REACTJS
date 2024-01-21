import React, { useContext, useState } from "react";
import QuizPage from "./Components/QuizPage";
import MainMenu from "./Components/MainMenu";
import EndScreen from "./Components/EndScreen";

import { quizContext } from "./Helpers/Contexts";

const App = () => {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="w-full h-screen grid">
      <div className="bg-sky-500 w-[500px] h-[550px] m-auto rounded-xl">
      <h1 className="text-center text-white text-6xl p-4 font-bold mb-8">QUIZ APP</h1>
        <div className="grid place-items-center">
          <quizContext.Provider
            value={{ gameState, setGameState, score, setScore }}
          >
            {gameState === "menu" && <MainMenu />}
            {gameState === "quiz" && <QuizPage />}
            {gameState === "end" && <EndScreen />}
          </quizContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
