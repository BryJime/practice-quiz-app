import QuizesData from "../MockData/QuizesData";
import { useLocation } from "react-router-dom";
import { useState } from "react";


function QuizPage() {

  const { state } = useLocation();
  const { category } = state;

  const [quizQuestion, setQuizQuestion] = useState(QuizesData.filter(quiz => quiz.category === category)[0].question);
  const [QuestIndex, setQuestIndex] = useState(1);
  const [questionOptions, setQuestionOptions] = useState(QuizesData.filter(quiz => quiz.category === category)[0].options);
  const [correctAnswer, setCorrectAnswer] = useState(QuizesData.filter(quiz => quiz.category === category)[0].answer);
  const [correctAnswerAlert, setCorrectAnswerAlert] = useState(null);

  let quizQuestions = QuizesData.filter(quiz => quiz.category === category);



  const nextQuestion = () => {
    setQuizQuestion(quizQuestions[QuestIndex].question);
    setQuestionOptions(quizQuestions[QuestIndex].options);
    setQuestIndex(QuestIndex + 1);
    setCorrectAnswer(quizQuestions[QuestIndex].answer);
    setCorrectAnswerAlert(null);
  }

  const previousQuestion = () => {
    setQuestIndex(QuestIndex - 1);
    setQuizQuestion(quizQuestions[QuestIndex].question);
    setQuestionOptions(quizQuestions[QuestIndex].options);
    setCorrectAnswer(quizQuestions[QuestIndex].answer);
    setCorrectAnswerAlert(null);
  }

  const checkAnswer = (selectedOption) => {
    selectedOption === correctAnswer ? setCorrectAnswerAlert(true) : setCorrectAnswerAlert(false);
  }

  console.log("Quiz Options: " + questionOptions);
  console.log("Quiz Question: " + quizQuestion);
  console.log("Correct Answer: " + correctAnswer);

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
              <h1 className="quiz-question-text"> {quizQuestion} </h1>
            </div>
          </div>

          <hr />

          <br />

          <div className="quiz-answer-buttons-container">
            <button className="quiz-answer-button" onClick={() => checkAnswer(questionOptions[0])}> {questionOptions[0]} </button>
            <button className="quiz-answer-button" onClick={() => checkAnswer(questionOptions[1])}> {questionOptions[1]} </button>
            <button className="quiz-answer-button" onClick={() => checkAnswer(questionOptions[2])}> {questionOptions[2]} </button>
            <button className="quiz-answer-button" onClick={() => checkAnswer(questionOptions[3])}> {questionOptions[3]} </button>
          </div>

          <br />

          <div className="quiz-navigation-buttons-container">

            <div className="navigation-buttons-container">
              <div className="previous-button-container">
                <button className="previous-question-button" onClick={() => previousQuestion()}> Previous </button>

              </div>
              <div className="next-button-container">
                <button className="next-question-button" onClick={() => nextQuestion()}> Next </button>
              </div>
            </div>

            <div className="submit-button-container">
              <button className="submit-answer-button" onClick={() => checkAnswer()}> Submit </button>
            </div>
          </div>

          <section className="quiz-answer-feedback-container">
            {correctAnswerAlert ? <h2 className="quiz-answer-feedback-correct"> Correct!</h2> : correctAnswerAlert === null ? <></> : <h2 className="quiz-answer-feedback-incorrect"> Incorrect!  </h2>
            }
          </section>

        </article>

      </div>
    </>
  );
};

export default QuizPage;