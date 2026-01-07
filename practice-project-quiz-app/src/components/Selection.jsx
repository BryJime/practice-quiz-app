import { useNavigate } from 'react-router-dom';
import ClipboardImage from '../Images/clipboard-home-image.png';


function Selection() {


    const navigate = useNavigate();

    const handleCategorySelect = (category) => {

        navigate('/quizpage', { state: { category } });
    }



    return (
        <div className="selection-container">
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

            <picture className="clipboard-home-image-container" >
                <img src={ClipboardImage} alt="clipboard-image" width="600" height="400" />
            </picture>

        </div >
    )
}

export default Selection;