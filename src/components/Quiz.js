import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/quiz.scss';
import data from '../assets/data/quiz';

// Quiz section
export default function Quiz() {
  const questions = data.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleTryAgainClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='quiz-container'>
      <div className='quiz'>
        {showScore ? (
          <div className='score-section'>
            <div className='score-section-display'>
              <div>
                You scored {score} out of {questions.length}
              </div>
              <button onClick={handleTryAgainClick}>Try Again</button>
            </div>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
