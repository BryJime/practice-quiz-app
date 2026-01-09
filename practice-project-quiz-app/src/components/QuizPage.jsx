import QuizesData from "../MockData/QuizesData";
import { useLocation } from "react-router-dom";
import { useState } from "react";


function QuizPage() {

  const { state } = useLocation();
  const { category } = state;

  const [questions, setQuestions] = useState([]);



  let quizQuestions = QuizesData.map(quiz => {
    quiz.category === category ? setQuestions(quiz.questions) : null
  });

  

  const findCategoryQuestions = () => {

  }


  return (
    <>
      <div className="quizpage-container">

        <div>
          <h1 className="quizpage-header"> {category} </h1>
        </div>

        <article className="quiz-question-container">

          <div className="quiz-question-header">
            <div className="quiz-question-text-container">
              <h1 className="quiz-question-number"> 1/10 </h1>
              <h1 className="quiz-question-text"> Question Text Here </h1>
            </div>
          </div>

          <hr />

          <br />

          <div className="quiz-answer-buttons-container">
            <button className="quiz-answer-button"> Answer 1 </button>
            <button className="quiz-answer-button"> Answer 2 </button>
            <button className="quiz-answer-button"> Answer 3 </button>
            <button className="quiz-answer-button"> Answer 4 </button>
          </div>

          <br />


          <div className="submit-button-container">
            <button className="submit-answer-button"> Submit </button>
          </div>

          <section className="quiz-answer-feedback-container">
            <h2 className="quiz-answer-feedback"> Correct or Incorrect </h2>
          </section>

        </article>

      </div>
    </>
  );
};

export default QuizPage;