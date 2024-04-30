import React, {useContext} from 'react';
import { QuizContext } from '../App';

function Answers() {
  const {questions, currentQuestion, setCurrentQuestion} = useContext(QuizContext);

const answersArray = questions[currentQuestion].answerOptions;
  
  const incrementQuestionIndex = (prevQuestion) => {
    return prevQuestion + 1;
  };

  // console.log(answersArray[currentIndex].isCorrect);

  const handleAnswerClick = () => {
    if (answersArray[currentQuestion].isCorrect === true) {
      setCurrentQuestion((prevQuestionIndex) =>
        incrementQuestionIndex(prevQuestionIndex)
      );
    }
  };

  // console.log(currentIndex);

  return (
    <div
      id='answer-container'
      className='w-full flex flex-col justify-between text-start'
    >
      {answersArray.map((answerObject, index) => {
        return (
          <button
            onClick={handleAnswerClick}
            className='rounded-lg border-4 text-start pl-1  py-1'
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

// TODO: I must use .map for creating buttons this way i can
// manage the correct and wrong answer better too beside a cleaner
// and more manageable code
