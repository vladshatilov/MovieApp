import {useContext} from "react";
import {GlobalContext} from "../../Context/GlobalState";
import SingleMovieMin from "../SingleMovie/SingleMovieMin";


const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    return (
        <div className={'watchlist__container'}>
            <div className="watchlist__header">
                <h2 className={'watchlist__header_text'}>
                    Watchlist&emsp;<i className={'fa fa-film'}></i>
                </h2>
                <span className="count_pill">
                    {watchlist.length} {watchlist.length>1?"Movies":"Movie"}
                </span>

            </div>

            {watchlist.length > 0 ?
                <div className={'movies movie__card_control watchlist'}>
                    {watchlist.map((movie) => (
                        <SingleMovieMin key={movie.id} media_type={'movie'} page_type={'watchlist_page'} id={movie.id}
                                        movie={movie} {...movie} />

                    ))}
                </div>
                :
                <h2 className={'no-movies'}>
                    No movies in your list yet, add some!
                </h2>
            }

        </div>
    )
}

export default Watchlist;