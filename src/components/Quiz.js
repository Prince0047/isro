import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/quiz.scss';

export default function Quiz() {
  const questions = [
    {
      questionText: 'Where is the Headqarters of the ISRO?',
      answerOptions: [
        { answerText: 'Pune', isCorrect: false },
        { answerText: 'Bangalore', isCorrect: true },
        { answerText: 'Lucknow', isCorrect: false },
        { answerText: 'Mumbai', isCorrect: false },
      ],
    },
    {
      questionText: 'When was ISRO formed',
      answerOptions: [
        { answerText: '15 August 1947', isCorrect: false },
        { answerText: '15 August 1952', isCorrect: false },
        { answerText: '15 August 1969', isCorrect: true },
        { answerText: '15 August 1967', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the Father of the Indian Space Program?',
      answerOptions: [
        { answerText: 'C.V. Raman', isCorrect: false },
        { answerText: 'Vikram Sarabhai', isCorrect: true },
        { answerText: 'M.G.K. Menon', isCorrect: false },
        { answerText: 'A.P.J. Abdul Kalam', isCorrect: false },
      ],
    },
    {
      questionText: 'Where is the Indian Institute of Remote Sensing (IIRS)?',
      answerOptions: [
        { answerText: 'Hyderabad', isCorrect: false },
        { answerText: 'Dehradun', isCorrect: true },
        { answerText: 'Ahmedabad', isCorrect: false },
        { answerText: 'Sriharikota', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the Full Form of PSLV?',
      answerOptions: [
        { answerText: 'Public Satellite Launch Vehicle', isCorrect: false },
        { answerText: 'Polar Satellite Launch Vehicle', isCorrect: true },
        { answerText: 'Polar Service Launch Vehicle', isCorrect: false },
        { answerText: 'Polar Service Launch Vehicle', isCorrect: false },
      ],
    },
  ];

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
