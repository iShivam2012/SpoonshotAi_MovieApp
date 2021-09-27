import { useContext } from "react"
import { MovieContext } from "../../Store/MovieContext"
import Container from "../../UI/Container"
import Search from "../SearchSection/Search";

const ShowResults = () => {
    const ctx = useContext(MovieContext)
    const { movieEntered, showEntered, flag, movies, tvShows, onMovieSubmitHandler, onShowSubmitHandler } = ctx;
    let filteredMovie = []
    if (flag && movies.results) {
        filteredMovie = movies.results.filter(movie => {
            return movie.title.includes(movieEntered)
        })
    }
    else if (!flag && tvShows.results) {
        filteredMovie = tvShows.results.filter(show => {
            return show.title.includes(showEntered)
        })
    }
    const valueType = flag ? movieEntered : showEntered;

    return (
        <Container className="column">
            <Search value={valueType} onChange={flag ? onMovieSubmitHandler : onShowSubmitHandler} type={flag ? "movie" : "show"} />
            <section className="sec">
                <h1>Showing results for '{valueType}'</h1>
                <div className="card">
                    {filteredMovie.map((movie, index) => {
                        return (
                            <div>
                                <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="poster" />
                                <h4 className="semiBoldText" >{movie.title}</h4>
                                <p className="normalText" >{movie.release_date}</p>
                            </div>)
                    })}
                </div>
            </section>
        </Container>
    )
}

export default ShowResults