import { Pagination } from "@mui/material";
import React from "react";

const Pagechange = ({setPage, numofPages=10}) => {
    
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }
    
    
    return(
        <div
        style={{
                width:"100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                fontWeight: "bold"
            }
        }
        >
            <Pagination  count={numofPages}  onChange={(e) => handlePageChange(e.target.textContent)}/>
        </div>
    );
};

export default Pagechange;