import React from 'react';

function Answers() {
  return (
    <div
      id='answer-container'
      className='w-full flex flex-col justify-between text-start'
    >
      <button className='rounded-lg border-sky-900 border-4 text-start pl-1 py-1'>
        I'm answer 1
      </button>
      <button className='rounded-lg border-sky-900 border-4 text-start pl-1  py-1'>
        I'm answer 3
      </button>
      <button className='rounded-lg border-sky-900 border-4 text-start pl-1  py-1'>
        I'm answer 2
      </button>
      <button className='rounded-lg border-sky-900 border-4 text-start pl-1  py-1'>
        I'm answer 4
      </button>
    </div>
  );
}

export default Answers;
