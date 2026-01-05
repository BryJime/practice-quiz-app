import QuizesData from "../MockData/QuizesData";
import { useLocation } from "react-router-dom";



function QuizPage() {

  const { state } = useLocation();
  const { category } = state;

  

  console.log();
  
  return (
    <>
      <div>
        <h1 className="quizpage-header"> {category} </h1>
      </div>
    </>
  );
};

export default QuizPage;