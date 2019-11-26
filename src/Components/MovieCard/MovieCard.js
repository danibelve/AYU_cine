import React from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import '../../Styles/Commons.css';
import './MovieCard.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.Movies = [
      {
        title: "The Joker",
        img: "https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg",
      },
      {
        title: "Malefica",
        img: "https://m.media-amazon.com/images/M/MV5BZjJiYTExOTAtNWU0Yi00NzJjLTkwOTgtOTU2NWM1ZjJmYWVhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        title: "Doctor Sleep",
        img: "https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_.jpg",
      },
      {
        title: "Downtown Abbey",
        img: "https://ewedit.files.wordpress.com/2019/03/da_andy.jpg?w=1800&h=2650",
      },
      {
        title: "Proyecto Geminis",
        img: "https://m.media-amazon.com/images/M/MV5BNjI5OTNkMzUtZDYzYy00NWQ5LTg4YzYtZmZjZDI0MGQzNGY2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
      },
      {
        title: "Zombieland 2",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zombieland-2-teaser-poster-1548837272.jpg",

      },

    ]
  }
  render() {
    return (
        <div className="moviedetails-card">

        {this.Movies.map((movie, key) => {
          return <MovieDetails
            image={movie.img}
            title={movie.title}
            description={movie.description}
            key={key}/>
        })
        }
        </div>
    )

  }

}

export default MovieCard;