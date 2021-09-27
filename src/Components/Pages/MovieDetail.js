import { useContext, useEffect } from "react"
import { MovieContext } from "../../Store/MovieContext"
import Container from "../../UI/Container";
import "./MovieDetail.css"

const MovieDetail = () => {
    const ctx = useContext(MovieContext)
    const { movie, genre, getGenre } = ctx;
    console.log(movie);

    useEffect(() => {
        getGenre()
    }, [])
    console.log(genre);

    let filteredGenre = []
    if (movie.genre_ids && genre && genre.genres) {
        for (let i = 0; i < movie.genre_ids.length; i++) {
            filteredGenre = genre.genres.filter(genreType => {
                if (genreType.id == movie.genre_ids[i]) {
                    i++
                    return genreType
                }
            })
        }
    }

    let date = new Date()

    return (
        <Container className="posterContainer" >
            <section className="poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
            </section>
            <section className="info">
                <h1 className="semiBoldText">{movie.title}</h1>
                <h3>{movie.release_date}</h3>
                {filteredGenre.map((genreItem) => {
                    return (
                        <p className="posterTxt">{genreItem.name}</p>
                    )
                })}
            </section>
            <section className="posterCard">
                <div>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </div>
                <div>
                    <h3>Status</h3>
                    <p>{movie.release_date < date.toDateString() ? "Released" : "Yet to be released"}</p>
                    <h3>Original Language</h3>
                    <p>{movie.original_language == "en" ? "English" : movie.original_language}</p>
                </div>
            </section>
        </Container>
    )
}
export default MovieDetail