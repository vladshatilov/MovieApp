import axios from "axios";
import {useEffect} from "react";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {},
    chip: {
        // margin: theme.spacing(0.5),
        margin: "2px",
    },
}))

const Genres = ({
                    selectGenres,
                    setSelectGenres,
                    genres,
                    setGenres,
                    setPage,
                    type
                }) => {

    const getGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres);
        }
    const styles = useStyles();

    useEffect(() => {
        getGenres();
        return () => {
            setGenres({});
        }
    }, [])

    const handleClick = (genre)=>{
        console.log('click',genre);
        setSelectGenres([...selectGenres,genre].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
        setGenres(genres.filter((g)=>g.id!==genre.id))
        setPage(1);
    }
    // function highest() {
    //     return [].slice.call(arguments).sort((a, b)=> {
    //         return a.name>b.name;
    //     });
    // }
    const handleRemove = (genre)=>{
        setSelectGenres(selectGenres.filter((g)=>g.id!==genre.id));
        setGenres([...genres,genre].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
        setPage(1);
    }


    return (
        <>
            <div className={'genres__holder'}>
                {selectGenres.length>0 && selectGenres.map((genre) => (
                    <Chip
                        className={styles.chip}
                        label={genre.name}
                        clickable
                        size={'small'}
                        // variant="outlined"
                        color="primary"
                        key={genre.id}
                        // onClick={()=>handleRemove(genre)}
                        onDelete={()=>handleRemove(genre)} />
                    ))}
                {genres.length>0 && genres.map((genre) => (
                    <Chip
                        className={styles.chip}
                        label={genre.name}
                        clickable
                        size={'small'}
                        // variant="outlined"
                        key={genre.id}
                        onClick={()=>handleClick(genre)} />
                    ))}
            </div>
        </>
    )
}


export default Genres;