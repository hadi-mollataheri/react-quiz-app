import React from 'react';

function Questions(props) {
    return (
        <div id='questions-container' className='mt-2'>
            <p>{props.questionText}</p>
        </div>
    );
}

export default Questions;