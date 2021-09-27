import { createContext, useState } from "react"
import { useHistory } from "react-router"

export const MovieContext = createContext()

const MovieContextProvider = (props) => {
    // const API_KEY = "e5c2d706af1c8a3ff2ed13bc13446fe4"
    const [movies, setMovies] = useState({})
    const [tvShows, setTvShows] = useState({})
    const [movieEntered, setMovieEntered] = useState("")
    const [showEntered, setShowEntered] = useState("")
    const [flag, setFlag] = useState(true)
    const [movie, setMovie] = useState({})
    const [genre, setGenre] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const MovieFetcher = async () => {
        try {
            setIsLoading(true)
            const response = await fetch("http://api.themoviedb.org/3/movie/popular?api_key=e5c2d706af1c8a3ff2ed13bc13446fe4")
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json();
            setMovies(data);
            setIsLoading(false)
        } catch (error) {
            <p>{error.message}</p>
        }
    }

    const TvShowsFetcher = async () => {
        try {
            setIsLoading(true)
            const response = await fetch("https://api.themoviedb.org/4/list/234?api_key=e5c2d706af1c8a3ff2ed13bc13446fe4")
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json();
            setTvShows(data);
            setIsLoading(false)
        } catch (error) {
            <p>{error.message}</p>
        }
    }

    const getGenre = async () => {
        try {
            setIsLoading(true)
            const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e5c2d706af1c8a3ff2ed13bc13446fe4")
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json();
            setGenre(data);
            setIsLoading(false)
        } catch (error) {
            <p>{error.message}</p>
        }
    }

    const onMovieSubmitHandler = (e) => {
        setMovieEntered(e.target.value)
        setShowEntered("")
        setFlag(true)
    }

    const onShowSubmitHandler = (e) => {
        setShowEntered(e.target.value)
        setMovieEntered("")
        setFlag(false)
    }

    const onClickHandler = (movieData, key, f) => {
        setMovie(movieData);
        f ? history.push(`/movieshome/${key}`) : history.push(`/tvshows/${key}`)
    }

    const ctx = {
        movies,
        tvShows,
        MovieFetcher,
        TvShowsFetcher,
        movieEntered,
        showEntered,
        onMovieSubmitHandler,
        onShowSubmitHandler,
        flag,
        onClickHandler,
        isLoading,
        movie,
        genre,
        getGenre
    }

    return (
        <MovieContext.Provider value={ctx} >
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider