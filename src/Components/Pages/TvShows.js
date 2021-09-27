import { useContext, useEffect } from "react";
import { MovieContext } from "../../Store/MovieContext";
import Container from "../../UI/Container";
import Search from "../SearchSection/Search";
import LoadingSpinner from "../../UI/LoadingSpinner"
import ButtonContainer from "../ButtonContainer";

const TvShows = () => {

    const ctx = useContext(MovieContext)

    useEffect(() => {
        ctx.TvShowsFetcher();
    }, [])

    console.log(ctx.tvShows);
    let f
    return (
        <Container className="column">
            <Search value={ctx.showEntered} onChange={ctx.onShowSubmitHandler} type="show" />
            <section className="sec">
                <h1>Browse TV Shows by category</h1>
                <ButtonContainer />
                <div className="card">
                    {ctx.isLoading ? <LoadingSpinner /> :
                        ctx.tvShows.results && ctx.tvShows.results.map((show, index) => {
                            return (
                                <div onClick={ctx.onClickHandler.bind(this, show, index, f = false)}>
                                    <img key={index} src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`} alt="poster" />
                                    <h4 className="semiBoldText" >{show.title}</h4>
                                    <p className="normalText" >{show.release_date}</p>
                                </div>)
                        })
                    }
                </div>
            </section>
        </Container>
    )
}

export default TvShows;