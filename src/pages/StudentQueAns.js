import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/questionAnswerComponent.css';

const StudentQueAns = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://learnwithus-f2tz.onrender.com/api/admin/all'); // Updated endpoint
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option,
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;

    questions.forEach((question) => {
      if (question.correctOption === selectedOptions[question._id]) {
        correctAnswers++;
      }
    });

    setResult(`You got ${correctAnswers} out of ${questions.length} correct.`);
  };

  return (
    <div className="question-container">
      <h2>Answer the following questions</h2>
      {questions.map((question) => (
        <div key={question._id} className="question">
          <h4>{question.question}</h4>
          <ul className="options">
            {question.options.map((option, index) => (
              <li key={index} className="option">
                <label>
                  <input
                    type="radio"
                    name={`question-${question._id}`}
                    value={index}
                    checked={selectedOptions[question._id] === index}
                    onChange={() => handleOptionChange(question._id, index)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default StudentQueAns;
