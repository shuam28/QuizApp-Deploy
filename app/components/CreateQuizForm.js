import { useState } from 'react';
import { useSession } from 'next-auth/client';

const CreateQuizForm = () => {
  const [session] = useSession();
  const [title, setTitle] = useState('');
  const [scheduleAt, setScheduleAt] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: '', answer: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/quizzes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, scheduleAt, questions }),
    });

    if (res.ok) {
      alert('Quiz created successfully');
    } else {
      alert('Error creating quiz');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="datetime-local"
        value={scheduleAt}
        onChange={(e) => setScheduleAt(e.target.value)}
      />
      {questions.map((q, idx) => (
        <div key={idx}>
          <input
            type="text"
            placeholder="Question Text"
            value={q.text}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[idx].text = e.target.value;
              setQuestions(newQuestions);
            }}
          />
          <input
            type="text"
            placeholder="Options (comma separated)"
            value={q.options}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[idx].options = e.target.value;
              setQuestions(newQuestions);
            }}
          />
          <input
            type="text"
            placeholder="Answer"
            value={q.answer}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[idx].answer = e.target.value;
              setQuestions(newQuestions);
            }}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddQuestion}>Add Question</button>
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default CreateQuizForm;
