import React, { useContext } from 'react'
import { quizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank';


const EndScreen = () => {

  const {score, setScore, setGameState} = useContext(quizContext);


  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div className='grid place-items-center'>
    <h1 className='text-white text-4xl'>Quiz Finished!</h1>
      <h3 className='text-white text-4xl'>{score}/{Questions.length}</h3>
      <button className='rounded-xl border border-white text-white p-4 mt-4 w-full text-xl hover:bg-white hover:text-sky-500 font-bold' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
