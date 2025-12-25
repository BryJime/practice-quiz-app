import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <h1 className="Logo"><Link to="/">QuizMate</Link></h1>
            <section className="navbar">
                <section className="nav-links">
                    
                    <Link to="/selection">Selection</Link>
                    <Link to="/aobout">About</Link>
                </section>
            </section>

        </header>
    );
}   

export default Header;  