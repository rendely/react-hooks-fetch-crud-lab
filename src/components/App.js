import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import {QuestionsProvider} from "./QuestionsContext";


function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      <QuestionsProvider>
        <AdminNavBar onChangePage={setPage} />
        {page === "Form" ? <QuestionForm /> : <QuestionList />}
      </QuestionsProvider>
    </main>
  );
}

export default App;
