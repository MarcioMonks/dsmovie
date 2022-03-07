import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import "./styles.css";

function Pagination() {
  return (
    <div className="mymovies-pagination-container">
      <div className="mymovies-pagination-box">
        <button className="mymovies-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="mymovies-pagination-button" disabled={false}>
          <Arrow className="mymovies-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
