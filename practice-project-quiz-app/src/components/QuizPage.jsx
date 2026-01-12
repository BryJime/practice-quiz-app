import QuizesData from "../MockData/QuizesData";
import { useLocation } from "react-router-dom";
import { useState } from "react";


function QuizPage() {

  const { state } = useLocation();
  const { category } = state;

  const [ quizQuestion, setQuizQuestion ] = useState(QuizesData.filter(quiz => quiz.category === category)[0].question);
  const [ QuestIndex, setQuestIndex ] = useState();
  const [ questionOptions, setQuestionOptions ] = useState([]);

  let quizQuestions = QuizesData.filter(quiz => quiz.category === category);


  console.log(quizQuestions); 

  const nextQuestion = () => {
    setQuizQuestion(quizQuestions[QuestIndex].question);
    setQuestIndex(QuestIndex + 1);
  }

  const previousQuestion = () => {
    setQuestIndex(QuestIndex - 1);
    setQuizQuestion(quizQuestions[QuestIndex].question);
  }


  console.log("Quiz Question: " + quizQuestion);

  return (
    <>
      <div className="quizpage-container">

        <div>
          <h1 className="quizpage-header"> {category} </h1>
        </div>

        <article className="quiz-question-container">

          <div className="quiz-question-header">
            <div className="quiz-question-text-container">
              <h1 className="quiz-question-number"> {QuestIndex}/10 </h1>
              <h1 className="quiz-question-text"> { quizQuestion } </h1>
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

          <div className="quiz-navigation-buttons-container">
            <div className="submit-button-container">
              <button className="submit-answer-button"> Submit </button>
            </div>

            <div className="navigation-buttons-container">
              <div className="previous-button-container">
                <button className="previous-question-button" onClick={() => previousQuestion()}> Previous </button>
                
              </div>
              <div className="next-button-container">
                <button className="next-question-button" onClick={() => nextQuestion()}> Next </button>
              </div>
            </div>
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