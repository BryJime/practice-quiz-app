import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <h1 className="logo"><Link to="/">QuizMate</Link></h1>
            <section className="navbar">
                <section className="header-selection">
                    <Link to="/selection">Selection</Link>
                </section>
                <section className="header-about">
                    <Link to="/about">About</Link>
                </section>
            </section>

        </header>
    );
}

export default Header;  