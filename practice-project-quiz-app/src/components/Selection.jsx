import { Link } from 'react-router-dom';
import useState from 'react';


function Selection() {

    // const [category, setCategory] = useState(null);

    const setCategory = (category) => { 
        console.log(`Category set to: ${category}`);
    }
    
    
    return (
        <div>
            <div className="selection-banner">
                <h2 className='selection-header'>Select Your Quiz Category</h2>
                <section className="selection-buttons">
                    <button className="selection-button" onClick={() => setCategory('History')}>History</button>
                    <button className="selection-button">Science</button>
                    <button className="selection-button">Movies</button>
                    <button className="selection-button">Sports</button>
                    <button className="selection-button">Television</button>
                    <button className="selection-button">Celebrity</button>
                    <button className="selection-button">Gaming</button>
                    <button className="selection-button">Geography</button>
                </section>
            </div>

        </div >
    )
}

export default Selection;