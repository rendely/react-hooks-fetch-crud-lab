import React, {useEffect, useState} from "react";
import {questionsAPI} from "./App";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);


  useEffect(()=>{
    //Load question list
    fetch(questionsAPI, {method: "GET"})
      .then(r => r.json())
      .then(questions => setQuestions(questions))
  },[])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => <QuestionItem question={question} />)}
      </ul>
    </section>
  );
}

export default QuestionList;
