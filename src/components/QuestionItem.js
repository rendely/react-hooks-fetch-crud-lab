import React, {useContext} from "react";
import {QuestionsContext} from "./QuestionsContext";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;
  const { questions, setQuestions } = useContext(QuestionsContext);

  function handleDelete(e){
    e.preventDefault();
    const id = question.id;
    setQuestions(questions.filter(q => q.id !== id));
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
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
