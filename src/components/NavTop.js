import logo from '../images/riw-logo.svg';
import '../styles/nav.css'
function NavTop() {
    return (
        <div className="nav-container">
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src={ logo } alt="LOGO" />
                    </a>
                </div>
                <ul className="flex">
                    <li>
                        <a id="link" href="#Home">Home</a>
                    </li>
                    <li>
                        <a id="link" href="#Profile">Profile</a>
                    </li>
                    <li>
                        <a id="link" href="#Certificate">Certificate</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavTop;