import React, { useContext, useState } from "react"
import { Questions } from "../Helpers/QuestionBank";
import { quizContext } from "../Helpers/Contexts";

const QuizPage = () => {

  const {setScore, score, setGameState} = useContext(quizContext);

  const [ currQuestion,setCurrQuestion] = useState(0);
  const [ optionChosen,setOptionChosen] = useState("");


  const nextQuestion = () => {
    if(Questions[currQuestion].answer === optionChosen){
      setScore(score+1);
    }
    setCurrQuestion(currQuestion+1);
  }
  const finishQuiz = () => {
    if(Questions[currQuestion].answer === optionChosen){
      setScore(score+1);
    }
    setGameState("end");
  }

  console.log(score);

  return (
    <div className="">
    <h1 className="text-white text-4xl mb-6">{Questions[currQuestion].prompt}?</h1>
    <div className="flex flex-col gap-2">
      <button onClick={() => setOptionChosen("A")} className="text-sky-500 bg-white text-xl rounded-xl p-2 focus:bg-sky-300 focus:text-white focus:border focus:border-white">{Questions[currQuestion].optionA}</button>
      <button onClick={() => setOptionChosen("B")} className="text-sky-500 bg-white text-xl rounded-xl p-2 focus:bg-sky-300 focus:text-white focus:border focus:border-white">{Questions[currQuestion].optionB}</button>
      <button onClick={() => setOptionChosen("C")} className="text-sky-500 bg-white text-xl rounded-xl p-2 focus:bg-sky-300 focus:text-white focus:border focus:border-white">{Questions[currQuestion].optionC}</button>
      <button onClick={() => setOptionChosen("D")} className="text-sky-500 bg-white text-xl rounded-xl p-2 focus:bg-sky-300 focus:text-white focus:border focus:border-white">{Questions[currQuestion].optionD}</button>
    </div>
    {currQuestion === Questions.length - 1 ? ( <button className="rounded-xl border border-white text-white p-4 mt-4 w-full text-xl hover:bg-white hover:text-sky-500" onClick={finishQuiz}>Finish Quiz</button>) : (<button className="hover:bg-white hover:text-sky-500 rounded-xl border border-white text-white p-4 mt-4 w-full text-xl" onClick={nextQuestion}>Next</button>)}
    </div>
  )
}

export default QuizPage
