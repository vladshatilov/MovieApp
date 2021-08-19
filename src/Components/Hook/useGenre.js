const useGenre = (genreList)=>{
    if (genreList.length <1) return '';

    // const GenreIds = genreList.map(e=>e.id).join(',')
    const GenreIds = genreList.map(e=>e.id).reduce((acc,cur)=> acc+','+cur);
    return GenreIds;
}

export default useGenre;