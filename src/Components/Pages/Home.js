import { useContext, useEffect } from "react";
import { MovieContext } from "../../Store/MovieContext";
import Container from "../../UI/Container";
import Search from "../SearchSection/Search";
import LoadingSpinner from "../../UI/LoadingSpinner"
import ButtonContainer from "../ButtonContainer";

const Home = () => {

    const ctx = useContext(MovieContext)
    console.log(ctx.movies);

    useEffect(() => {
        ctx.MovieFetcher();
    }, [])

    let f;

    return (
        <Container className="column">
            <Search value={ctx.movieEntered} onChange={ctx.onMovieSubmitHandler} type="movie" />
            <section className="sec">
                <h1>Browse movies by category</h1>
                <ButtonContainer />
                <div className="card">
                    {ctx.isLoading ? <LoadingSpinner /> :
                        ctx.movies.results && ctx.movies.results.map((movie, index) => {
                            return (
                                <div onClick={ctx.onClickHandler.bind(this, movie, index, f = true)} >
                                    <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="poster" />
                                    <h4 className="semiBoldText" >{movie.title}</h4>
                                    <p className="normalText" >{movie.release_date}</p>
                                </div>)
                        })
                    }
                </div>
            </section>
        </Container>
    )
}

export default Home;