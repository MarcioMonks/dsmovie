import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="mymovies-nav-content">
          <h1>MyMovies</h1>
          <a
            href="http://github.com/MarcioMonks"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mymovies-contact-container">
              <GithubIcon />
              <p className="mymovies-contact-link">/MarcioMonks</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
