import axios from "axios";
import {useEffect, useState} from "react";
import SingleMovie from "../SingleMovie/SingleMovie";
import PaginationComponent from "../Pagination/PaginationComponent";
import Genres from "../Genres/Genres";
import useGenre from "../Hook/useGenre";


const TV = () => {
    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);
    const [numPages,setNumPages] = useState(10);
    const [selectGenres,setSelectGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const pickGenreURL = useGenre(selectGenres);

    function getMovies(page) {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${pickGenreURL}`
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
            <span className="page__tv">
            TV
            </span>
            <Genres
                type={'tv'}
                selectGenres={selectGenres}
                setSelectGenres={setSelectGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage} />
            <div className="movies">
                {movies.length > 0 && movies.map((movie, index) => (
                    <SingleMovie key={movie.id} media_type={'tv'} id={movie.id} movie={movie} {...movie} />
                ))}
            </div>
            {numPages>1 && (
                <PaginationComponent setPage={setPage} numPages={numPages} />
            )}
        </>
    )
}

export default TV;


