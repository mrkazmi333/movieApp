import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
// import { connect } from "../index";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    //make api call
    //dispatch action
    this.props.dispatch(addMovies(data));

    // console.log("STATE", this.props.store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      //movie is already favourited
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies, search } = this.props; //will return { movies: {}, search: {} }
    const { list, favourites, showFavourites } = movies; //{list: [], favourites: [], showFavourites}
    console.log("RENDER", this.props);
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

//creating app wrapper because Consumer can only be used inside
//render method and since our App component requires use of store in
//other methords like componentdidMount and others so we wrapped the whole app
//component using a wrapper class where we can easily user the consumer
//property inside the render method to get the store data

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
