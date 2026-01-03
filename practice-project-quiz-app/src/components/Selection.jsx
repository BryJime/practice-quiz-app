import { Link } from 'react-router-dom';
import { useState } from 'react';


function Selection() {

    const [category, setCategory] = useState();
    const [showQuiz, setShowQuiz] = useState(null);
    const [ quizData, setQuizData] = useState([]);

    const handleCategorySelect = (s) => {
        setCategory(s);
        console.log(`Selected category: ${s}`);

    }

    const fetchQuizData = async () => {
        
    }

    return (
        <div>
            <div className="selection-banner">
                <h2 className='selection-header'>Select Your Quiz Category</h2>
                <section className="selection-buttons">
                    <button className="selection-button" onClick={() => handleCategorySelect('History')}>History</button>
                    <button className="selection-button" onClick={() => handleCategorySelect('Science')}>Science</button>
                    <button className="selection-button" onClick={() => handleCategorySelect('Movies')}>Movies</button>
                    <button className="selection-button" onClick={() => handleCategorySelect('Sports')}>Sports</button>
                    <button className="selection-button" onClick={() => handleCategorySelect('Television')}>Television</button>
                    <button className="selection-button" onClick={() => handleCategorySelect('Celebrity')}>Celebrity</button>
                    <button className="selection-button" onClick={() => handleCategorySelect('Gaming')}>Gaming</button>
                    <button className="selection-button" onClick={() => handleCategorySelect('Geography')}>Geography</button>
                </section>
            </div>

        </div >
    )
}

export default Selection;