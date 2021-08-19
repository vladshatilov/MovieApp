import axios from "axios";
import {useEffect, useState} from "react";
import SingleMovie from "../SingleMovie/SingleMovie";
import './Trending.css';
import PaginationComponent from "../Pagination/PaginationComponent";


const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);

    function getTrending(page) {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        }).then(response => {
            setMovies(response.data.results ?? [])
            // setPage(response.data.total_pages)
            // console.log(response.data.results)
        })
    }

    // useEffect(() => {
    //     getTrending(page);
    //     console.log(page);
    // }, [])

    useEffect(() => {
        getTrending(page);
        // console.log(page);
    }, [page])

    return (
        <>
            <span className="page__title">Trending</span>
            <div className="movies">
                {movies.length > 0 && movies.map((movie, index) => (
                    <SingleMovie key={movie.id} id={movie.id} media_type={movie.media_type} movie={movie} {...movie} />
                ))}
            </div>
            <PaginationComponent setPage={setPage} />
        </>
    )
}

export default Trending;