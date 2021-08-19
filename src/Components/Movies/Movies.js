import axios from "axios";
import './Movies.css';
import {useContext, useEffect, useState} from "react";
import SingleMovie from "../SingleMovie/SingleMovie";
import PaginationComponent from "../Pagination/PaginationComponent";
import Genres from "../Genres/Genres";
import useGenre from "../Hook/useGenre";
import ContentFocus from "../FocusModal/ContentFocus";
import {GlobalContext} from "../../Context/GlobalState";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);
    const [numPages,setNumPages] = useState(10);
    const [selectGenres,setSelectGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const pickGenreURL = useGenre(selectGenres);
    // const {add_Movie_to_watchlist} = useContext(GlobalContext);

    function getMovies(page) {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${pickGenreURL}`
        }).then(response => {
            setMovies(response.data.results ?? [])
            setNumPages(response.data.total_pages)
            // console.log(response.data.results)
        })
    }

    useEffect(() => {
        getMovies(page);
    }, [page,pickGenreURL])

    return (
        <>
            <span className="page__movies">
            Movies
            </span>
            <Genres
                type={'movie'}
                selectGenres={selectGenres}
                setSelectGenres={setSelectGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage} />
            <div className="movies">
                {movies.length > 0 && movies.map((movie, index) => (
                    <>
                    <SingleMovie key={movie.id} media_type={'movie'} id={movie.id} movie={movie} {...movie} />
            {/*<div className="controls">*/}
            {/*    <button*/}
            {/*        onClick={()=>{add_Movie_to_watchlist(movie)}}*/}
            {/*        className="btn">*/}
            {/*        Add to Watchlist</button>*/}
            {/*</div>*/}
                    </>
                ))}
            </div>
            {numPages>1 && (
                <PaginationComponent setPage={setPage} numPages={numPages} />
            )}
        </>
    )
}

export default Movies;