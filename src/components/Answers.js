import React, { useContext } from 'react';
import { QuizContext } from '../App';

function Answers() {
  const { questions, currentQuestion, setCurrentQuestion, setShowScore } =
    useContext(QuizContext);

  const answersArray = questions[currentQuestion].answerOptions;

  const incrementQuestionIndex = (prevQuestion) => {
    return prevQuestion === questions.length - 1
      ? setShowScore(true)
      : prevQuestion + 1;
  };

  const handleAnswerClick = () => {
    setCurrentQuestion((prevQuestion) => incrementQuestionIndex(prevQuestion));
  };

  return (
    <div
      id='answer-container'
      className='w-full flex flex-col justify-between text-start'
    >
      {answersArray.map((answerObject, index) => {
        return (
          <button
            onClick={handleAnswerClick}
            className='rounded-lg border-4 text-start pl-1  py-1 border-sky-900'
            key={index}
          >
            {answerObject.answerText}
          </button>
        );
      })}
    </div>
  );
}

export default Answers;

// TODO:
// Create a condition that when our questions ends prevQuestion index wont be incremented
