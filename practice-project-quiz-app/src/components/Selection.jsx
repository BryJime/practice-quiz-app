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
        try {

            const response = await fetch('https://the-trivia-api.com/v2/questions', {
                method: 'GET'
            })

            if (!response.ok) {

                let errData = await response.json();

                throw new Error(errData.message || '******Failed to fetch exams********');


            }

            const data = await response.json();
            setQuizData(data);
            

        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
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