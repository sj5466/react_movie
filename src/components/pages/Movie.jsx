import React, { useEffect, useState } from "react";
import Header from '../layout/Header'
import Contents from '../layout/Contents'
import Footer from '../layout/Footer'
import Title from '../layout/Title'
import Contact from '../layout/Contact'
import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";

function Movie() {
  const [movies, setMovies] =useState([]);
  
  const search=(query)=>{
    let requestOptions ={
      method:"GET",
      redirect:"follow",
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie/?${query}&api_key=70161310dc890f9fe8ba797d4aa3bcbc&query=${query}`,
      requestOptions
    )
    .then(response => response.json())
    .then(result => {setMovies(result.results);})
    .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    let requestOptions ={
      method:"GET",
      redirect:"follow",
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie/?api_key=70161310dc890f9fe8ba797d4aa3bcbc&query=Jack",
      requestOptions
    )
    .then(response => response.json())
    .then(result => {setMovies(result.results);})
    .catch(error => console.log('error', error));
  }, []);
  return (
    
    <>
      <Header />
      <Contents>
        <Title title={["movie","reference"]} />
          <section className='movie__cont'>
            <div className="container">
              <div className='movie__inner'>
                <MovieSearch onSearch={search}/>
                <MovieList movies={movies} />
              </div>
            </div>
          </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Movie