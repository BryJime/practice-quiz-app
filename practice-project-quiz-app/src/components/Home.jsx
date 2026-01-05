import Selection from './Selection.jsx'
import { useNavigate } from 'react-router-dom';



function Home() {

    const navigate = useNavigate();

    const handleStartNow = () => {
        navigate('/makeyourown' )
    }

    return <> 
    <picture className="clipboard-home-image-container">
        <img className="clipboard-home-image" src=".\Images\clipboard-home-image.png" alt="clipboard-image" />
    </picture>
        <Selection />

        <div className="make-your-own-banner">
                <h2 className='make-your-own-header'> Make Your Own Quiz! </h2>
                    <button className="make-your-own-button" onClick={() => handleStartNow()}>Start Now</button>

            </div>

    </>;

}

export default Home;