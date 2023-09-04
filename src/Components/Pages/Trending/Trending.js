import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Content from "../../Content/Content";
import "./trending.css";
import PageChange from "../../PageChange/Pagechange";


const Trending = (props) => {

    const[page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    // const fetchdata= async () => {
    //     const {data}  = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
        
    //     console.log(data.results);
    //     setContent(data.results);
    // };

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then( (res) => {
            setContent(res.data.results);
            // console.log(res.data);
        })
        .catch(err => {
            // console.log(err);
        })
    },[page])



    return(
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {content && content.map((c) => 
                (<Content 
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media={c.media_type}
                    vote_avg = {c.vote_average /2}
                    language={c.original_language}
                />))}
            </div>
            <PageChange setPage={setPage}/>
        </div>
    )
} 

export default Trending;