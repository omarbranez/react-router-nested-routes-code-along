// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

import MovieShow from '../components/MovieShow'

const MoviesPage = ({ match, movies }) => ( // passing the movies prop AGAIN 
  //match comes from routerProps. it contains the current URL
  <div> 
    <MoviesList movies={movies}/> 
    {/* // adding nested route to display movieshow if the route matches the ID // */}
    {/* <Route path={`${match.url}/:movieId`} component={MovieShow} /> */}
    {/* <Route path={`${match.url}/:movieId`} component={<MovieShow movies={movies} />}/> */}
    {/* passing the movies down to MovieShow */}
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={(routerProps) => <MovieShow {...routerProps} movies={movies}/>}/>
    {/* passing in a function that has access to information about the route itself with RENDER and keyvalue pairs in ROUTERPROPS */}
  </div>
)

export default MoviesPage
