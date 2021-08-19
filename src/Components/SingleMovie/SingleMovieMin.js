import './SingleMovie.css';
import {img_300, unavailable} from "../config/config";
import Badge from "@material-ui/core/Badge";
import ContentFocus from "../FocusModal/ContentFocus";
import {useContext} from "react";
import {GlobalContext} from "../../Context/GlobalState";

const SingleMovie = ({movie,id, title, poster_path, media_type, first_air_date, release_date,page_type, original_title, name, original_name, backdrop_path, vote_average}) => {
    const {
        add_Movie_to_watchlist,
        remove_Movie_from_watchlist,
        add_Movie_to_watched,
        move_to_watchlist,
        watchlist,
        watched
    } = useContext(GlobalContext);

    let storedMovie = watchlist?.find(o => o.id === movie.id) ? true : false ?? false;
    let watchedMovie = watched?.find(o => o.id === movie.id) ? true : false ?? false;

    return (
        <>
            <div className="handler">
                {page_type==='watchlist_page' &&
                    <>
                        <i className={'fa-fw far fa-eye single_movie__icon watch_page__icon'} onClick={()=>(add_Movie_to_watched(movie))}></i>
                        &#32;
                        <i className="fa fa-times-circle single_movie__icon watch_page__icon" aria-hidden="true" onClick={()=>(remove_Movie_from_watchlist(id))} />
                    </>
                    }
                {page_type==='watched_page' ?
                    <i className="fa fa-eye-slash single_movie__icon watch_page__icon" aria-hidden="true" onClick={()=>(move_to_watchlist(movie))} ></i>
                    :<></>}




                <ContentFocus media_type={media_type} id={id} >
                    <Badge className={'badge__handler'} badgeContent={vote_average} color={
                        (vote_average >= 7 ? 'primary' : (vote_average >= 5 && vote_average < 7) ? 'secondary' : 'error')
                    }/>
                    <div className="poster__container">
                        <img className={'poster'} src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                             alt={`${title ? title : (original_title ? original_title : (name ? name : original_name))}`}/>
                    </div>
                    {/*<div className="title">*/}
                    {/*    <b>{title ? title : (original_title ? original_title : (name ? name : original_name))}</b>*/}
                    {/*</div>*/}
                    {/*<div className={'subtitle'}>*/}
                    {/*    <span>*/}
                    {/*        {media_type === 'tv' ? "TV Series" : "Movie"}*/}
                    {/*    </span>*/}
                    {/*        <span>*/}
                    {/*        {first_air_date ? first_air_date : release_date}*/}
                    {/*    </span>*/}
                    {/*</div>*/}
                </ContentFocus>
            </div>
        </>
    )
}

export default SingleMovie;
