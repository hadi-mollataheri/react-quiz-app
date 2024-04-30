import React, { useContext } from 'react';
import { QuizContext } from '../App';

function Answers() {
  const {
    questions,
    currentQuestion,
    setCurrentQuestion,
    setShowScore,
    setScore,
  } = useContext(QuizContext);

  const eachQuestionScore = 100 / questions.length;

  const answersArray = questions[currentQuestion].answerOptions;

  const incrementQuestionIndex = (prevQuestion) => {
    return prevQuestion === questions.length - 1
      ? setShowScore(true)
      : prevQuestion + 1;
  };

  const handleScore = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prevScore) => prevScore + eachQuestionScore);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    handleScore(isCorrect);
    setCurrentQuestion((prevQuestion) => {
      return incrementQuestionIndex(prevQuestion);
    });
  };

  return (
    <div
      id='answer-container'
      className='w-full flex flex-col justify-between text-start'
    >
      {answersArray.map((answerObject, index) => {
        return (
          <button
            onClick={() => handleAnswerClick(answerObject.isCorrect)}
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
