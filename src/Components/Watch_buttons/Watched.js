import {useContext} from "react";
import {GlobalContext} from "../../Context/GlobalState";
import SingleMovie from "../SingleMovie/SingleMovie";
import SingleMovieMin from "../SingleMovie/SingleMovieMin";

const Watched = ()=>{
    const {watched} = useContext(GlobalContext);

    return(
        <>
            <h2 className={'watchlist__container'}>
                Watched movies&emsp;<i className={'fa fa-smile-o'}></i>
            </h2>

            {watched.length > 0 ?
                <div className={'movies movie__card_control watchlist'}>
                    {watched.map((movie) => (
                        <SingleMovieMin key={movie.id} media_type={'movie'} page_type={'watched_page'} id={movie.id}
                                        movie={movie} {...movie} />

                    ))}
                </div>
                :
                <h2 className={'no-movies'}>
                    I can't believe you hadn't see any movie. Where are you from?!
                </h2>
            }

        </>
    )
}

export default Watched;
