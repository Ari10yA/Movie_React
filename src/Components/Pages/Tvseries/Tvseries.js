import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "../../Content/Content";
import PageChange from "../../PageChange/Pagechange";
import Genres from "../../Genres/Genres";
import useGenres from "../../../Hooks/useGenres";


const Tvseries = (props) => {
    
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [pageCount, setpageCount] = useState();
    const [selectedGenres, setselectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const generateURL=useGenres(selectedGenres);

    const fetchMovies = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${generateURL}`);
        setpageCount(data.data.total_pages);
        setContent(data.data.results);
        // console.log(data.data.total_pages);
    };

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    },[page, generateURL])
    
    
    return(
        <div>
            <span className="pageTitle">Tv Series</span>
            <Genres 
            setselectedGenres={setselectedGenres}
            type="tv" 
            selectedGenres={selectedGenres} 
            genres={genres} 
            setGenres={setGenres}
            setPage={setPage}
            />
            <div className="trending">
                {content && content.map((c) => 
                (<Content 
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media="tv"
                    vote_avg = {c.vote_average/2}
                    language={c.original_language}
                />))}
            </div>
            <PageChange setPage={setPage} numofPages={pageCount}/>
        </div>
    )
} 

export default Tvseries;