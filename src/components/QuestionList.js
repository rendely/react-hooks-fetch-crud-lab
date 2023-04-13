import React, {useEffect, useContext} from "react";
import QuestionItem from "./QuestionItem";
import {QuestionsContext} from "./QuestionsContext";


function QuestionList() {
  const { questions, setQuestions } = useContext(QuestionsContext);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => <QuestionItem key={question.id} question={question} />)}
      </ul>
    </section>
  );
}

export default QuestionList;
