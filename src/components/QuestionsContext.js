import React, {createContext, useEffect, useState} from 'react';
const questionsAPI = 'http://localhost:4000/questions';


const QuestionsContext = createContext();

function QuestionsProvider({children}) {
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    //Load question list
    fetch(questionsAPI, {method: "GET"})
      .then(r => r.json())
      .then(questions => {setQuestions(questions); })
  },[])

  const value = { questions: questions, setQuestions: setQuestions };

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>
}

export { QuestionsContext, QuestionsProvider };