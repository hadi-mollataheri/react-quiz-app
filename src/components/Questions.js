import React, { useContext } from 'react';
import { QuizContext } from '../App';

function Questions(props) {
  const { questions, currentQuestion } = useContext(QuizContext);

  const questionText = questions[currentQuestion].questionText;

  return (
    <div id='questions-container' className='mt-2'>
      <p className=' text-lg'>{questionText}</p>
    </div>
  );
}

export default Questions;
