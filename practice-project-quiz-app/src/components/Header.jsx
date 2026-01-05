import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <h1 className="logo"><Link to="/">QuizMate</Link></h1>
            <section className="navbar">
                <selection className="header-contact">
                    <Link to="/contact">Contact</Link>
                </selection>
                <section className="header-about">
                    <Link to="/about">About</Link>
                </section>
            </section>

        </header>
    );
}

export default Header;  