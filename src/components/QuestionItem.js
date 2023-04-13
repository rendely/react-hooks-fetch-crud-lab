import React, { useContext } from "react";
import { QuestionsContext } from "./QuestionsContext";
const questionsAPI = 'http://localhost:4000/questions';


function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;
  const { questions, setQuestions } = useContext(QuestionsContext);

  function handleDelete(e) {
    e.preventDefault();
    const id = question.id;
    setQuestions(questions.filter(q => q.id !== id));
  }

  function handleChangeAnswer(e) {
    const value = e.target.value;
    const id = question.id;
    fetch(questionsAPI + '/' + id, {
      method: "PATCH",
      headers: { "Content-type": "json/application" },
      body: {correctIndex: value}
    })
      .then(r => r.json())
      .then(updatedQuestion => {
        setQuestions(questions.map(q => q.id === id ? updatedQuestion : q))
      });

  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangeAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
