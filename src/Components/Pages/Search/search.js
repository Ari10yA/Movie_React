import { Tab, Tabs, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@mui/material/Button";
import axios from "axios";
import Content from "../../Content/Content";
import Pagechange from "../../PageChange/Pagechange";
import "./search.css";


const Search = (props) => {

    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [pageCount, setpageCount] = useState();

    const fetchSearch = async () => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          setpageCount(data.total_pages);
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
      }, [type, page]);





    return(
      <div className="Posi">
            <div className="search">
            <TextField
                style={{ flex: 1 }}
                className="searchBox"
                label="Search"
                variant="filled"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant='contained' style={{marginLeft: 10}} onClick={fetchSearch}> <SearchIcon/> </Button>

            </div>

            <Tabs 
            value={type} 
            indicatorColor="primary" 
            textColor="primary"
            onChange={(event, newValue) => {
                setType(newValue);
                setPage(1);
            }}
            style={{paddingBottom: 5}}
            >
          
            <Tab style={{ width: "50%" }} label="Search Movies"/>
            <Tab style={{ width: "50%" }} label="Search TV Series"/>
            </Tabs>

            <div className="trending">
        {content &&
          content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_avg = {c.vote_average /2}
              language={c.original_language}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {pageCount > 1 && (
        <Pagechange setPage={setPage} numOfPages={pageCount} />
      )}
        
      </div>
        
    )
} 

export default Search;