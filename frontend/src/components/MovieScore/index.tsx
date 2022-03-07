import MovieStars from "components/MovieStars";
import "./styles.css";

function MovieScore() {
  const score = 2.5;
  const count = 13;
  return (
    <div className="mymovies-score-container">
      <p className="mymovies-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="mymovies-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
