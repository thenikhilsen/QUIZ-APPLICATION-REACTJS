import React, { useContext } from 'react'
import { quizContext } from '../Helpers/Contexts'

const MainMenu = () => {

  const {gameState, setGameState} = useContext(quizContext);

  return (
    <div>
      <button className='rounded-xl border border-white text-white p-4 mt-4 w-full text-xl hover:bg-white hover:text-sky-500' onClick={()=>{
        setGameState("quiz")
      }}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
