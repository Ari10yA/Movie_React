import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

const Genres = ({
    selectedGenres,
    setselectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {

    const handleAdd = (genre) => {
        setselectedGenres([...selectedGenres, genre]);
        setGenres(genres.filer((g) => g.id !== genre.id));
        setPage(1);
    }
    
    const handleRemove = (genre) => {
        setselectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres =async () => {
        const data =await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=3bb31d3641057cc786c0bbe31c2b8039&language=en-US`);
        console.log(data.data.genres);
        setGenres(data.data.genres);
    }

    useEffect(() => {
        fetchGenres();

        return() => {
            setGenres([]);
        }
       // eslint-disable-next-line 
    }, []);
    
    return(
        <div>         
             {selectedGenres && selectedGenres.map((genre) => (
                <Chip label={genre.name} style={{ margin: 2 }} color="primary" key={genre.id} size='small' clickable onDelete={()=> handleRemove(genre)}/>
            ))}  
            {genres && genres.map((genre) => (
                <Chip label={genre.name} style={{ margin: 2 }} key={genre.id} size='small' clickable onClick={()=>handleAdd(genre)}/>
            ))}    
        </div>
    );
}

export default Genres;