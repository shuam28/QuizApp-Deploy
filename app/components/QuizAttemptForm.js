
import { useState, useEffect } from 'react';

const QuizAttemptForm = ({ quiz }) => {
  const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(''));
  const [windowSwitchCount, setWindowSwitchCount] = useState(0);

  useEffect(() => {
    const handleFocus = () => {
      if (document.hidden) {
        setWindowSwitchCount((count) => count + 1);
      }
    };
    document.addEventListener('visibilitychange', handleFocus);
    return () => {
      document.removeEventListener('visibilitychange', handleFocus);
    };
  }, []);

  useEffect(() => {
    if (windowSwitchCount >= 2) {
      handleSubmit();
    }
  }, [windowSwitchCount]);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/quizzes/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quizId: quiz.id, answers }),
    });

    if (res.ok) {
      alert('Quiz submitted successfully');
    } else {
      alert('Error submitting quiz');
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Submit Quiz</button>
    </form>
  );
};

export default QuizAttemptForm;
