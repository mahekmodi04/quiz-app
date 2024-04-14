import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Jane Austen", "Mark Twain", "Charles Dickens"],
      correctAnswer: "Harper Lee"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Cell Membrane", "Mitochondria", "Endoplasmic Reticulum"],
      correctAnswer: "Mitochondria"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "What is the symbol for the chemical element Gold?",
      options: ["Au", "Ag", "Fe", "Pb"],
      correctAnswer: "Au"
    },
    {
      question: "Which country is commonly referred to as the 'Land of the Rising Sun'?",
      options: ["China", "South Korea", "Japan", "Vietnam"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the currency of Brazil?",
      options: ["Peso", "Real", "Dollar", "Euro"],
      correctAnswer: "Real"
    },
    {
      question: "Who is known as the father of Computers?",
      options: ["Charles Babbage", "Bill Gates", "Tim Berners-Lee", "Steve Jobs"],
      correctAnswer: "Charles Babbage"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
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
    <div style={{ backgroundColor: '#ff69b4', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      {showScore ? (
        <div>
          <h2>Your Score: {score} out of {questions.length}</h2>
          {score > 7 && <p>Congratulations! You are qualified.</p>}
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}/{questions.length}</h2>
          <p style={{ color: '#000' }}>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerOptionClick(option)} style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
