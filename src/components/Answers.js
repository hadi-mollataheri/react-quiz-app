import React from 'react';

function Answers(props) {
  const incrementQuestion = (prevQuestion) => {
    return prevQuestion + 1;
  };

  const handleOptionOne = (e) => {
    if (props.answersArray[0].isCorrect === true) {
      props.setQuestionIndex((prevQuestionIndex) => {
        return incrementQuestion(prevQuestionIndex);
      });
    } else return;
  };

  const handleOptionTwo = (e) => {
    if (props.answersArray[1].isCorrect === true) {
      props.setQuestionIndex((prevQuestionIndex) => {
        return incrementQuestion(prevQuestionIndex);
      });
    } else return;
  };

  const handleOptionThree = (e) => {
    if (props.answersArray[2].isCorrect === true) {
      props.setQuestionIndex((prevQuestionIndex) => {
        return incrementQuestion(prevQuestionIndex);
      });
    } else return;
  };

  const handleOptionFour = (e) => {
    if (props.answersArray[3].isCorrect === true) {
      props.setQuestionIndex((prevQuestionIndex) => {
        return incrementQuestion(prevQuestionIndex);
      });
    } else return;
  };

  return (
    <div
      id='answer-container'
      className='w-full flex flex-col justify-between text-start'
    >
      <button
        onClick={handleOptionOne}
        className='rounded-lg border-sky-900 border-4 text-start pl-1 py-1'
      >
        {props.answersArray[0].answerText}
      </button>
      <button
        onClick={handleOptionTwo}
        className='rounded-lg border-sky-900 border-4 text-start pl-1  py-1'
      >
        {props.answersArray[1].answerText}
      </button>
      <button
        onClick={handleOptionThree}
        className='rounded-lg border-sky-900 border-4 text-start pl-1  py-1'
      >
        {props.answersArray[2].answerText}
      </button>
      <button
        onClick={handleOptionFour}
        className='rounded-lg border-sky-900 border-4 text-start pl-1  py-1'
      >
        {props.answersArray[3].answerText}
      </button>
    </div>
  );
}

export default Answers;
