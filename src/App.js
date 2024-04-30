import { useState, createContext } from 'react';

import Questions from './components/Questions';
import Answers from './components/Answers';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];

// Create new context called quizContext
export const QuizContext = createContext();

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestion,
        setCurrentQuestion,
        setShowScore,
        setScore,
      }}
    >
      {showScore ? (
        <div
          id='score-section'
          className='flex justify-center items-center mt-28 bg-blue-950 my-0 mx-auto p-4 max-w-md min-h-52 text-white rounded-2xl shadow-2xl'
        >
          <h2 className='font-bold text-lg'>{`Your score is: %${score}`}</h2>
        </div>
      ) : (
        <div
          id='app-container'
          className='flex justify-evenly mt-28 bg-blue-950 my-0 mx-auto p-4 max-w-md min-h-52 text-white rounded-2xl shadow-2xl'
        >
          <div id='left-side-container' className='w-3/4'>
            <h1 className='font-bold text-lg'>
              Question {`${currentQuestion + 1}`}
              <span
                id='question-number'
                className=' font-normal text-base'
              >{`/${questions.length} `}</span>
            </h1>
            <Questions />
          </div>
          <Answers />
        </div>
      )}
    </QuizContext.Provider>
  );
}

export default App;
// TODOs:
