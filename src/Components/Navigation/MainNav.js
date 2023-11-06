import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#f3926c",
    zIndex: 100,
    fontWeight: "bold"
  },
  button: {
    fontWeight: "bold"
  }
});

export default function SimpleBottomNavigation() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/tvseries");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
              className={classes.root}
      >
        <BottomNavigationAction 
            label="Trending" 
            icon={<TrendingUpIcon />}  
            className={classes.button}
        />      
        <BottomNavigationAction 
            label="Movies" 
            icon={<MovieIcon />}  
            className={classes.button}
        />
        <BottomNavigationAction 
            label="TV Series" 
            icon={<LiveTvIcon />} 
            className={classes.button}

        />
        <BottomNavigationAction 
            label="Search" 
            icon={<YoutubeSearchedForIcon />} 
            className={classes.button}            

        />
      </BottomNavigation>
  );
}