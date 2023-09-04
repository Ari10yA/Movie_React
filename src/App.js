import { BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './Components/header/Header';
import Navigation from './Components/Navigation/MainNav';
import Trending from './Components/Pages/Trending/Trending';
import Tvseries from './Components/Pages/Tvseries/Tvseries.js';
import Search from './Components/Pages/Search/search';
import Movie from './Components/Pages/Movies/Movie';
import { Container } from "@material-ui/core";


function App() {
  return (     
      <BrowserRouter>
         <Header/> 

        <div className='app'>
        <Container>
        <Routes>
            <Route path="/" exact element={<Trending />}  />
            <Route path="/movies" element={<Movie />} />
            <Route path="/tvseries" element={<Tvseries />} />
            <Route path="/search" element={<Search />} />  
          </Routes>
        </Container>
        </div>
        <Navigation/>
      </BrowserRouter>
  );
}

export default App;
