import React from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.Movies = [
      {
        title: "The Joker",
        img: "https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg",
        description: "La peli del joker",
        selected: true
      },
      {
        title: "Malefica",
        img: "https://m.media-amazon.com/images/M/MV5BZjJiYTExOTAtNWU0Yi00NzJjLTkwOTgtOTU2NWM1ZjJmYWVhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        description: "La peli de maleficient",
        selected:false
      },
      {
        title: "Doctor Sleep",
        img: "https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_.jpg",
        description: "Doctor sleep la peli",
        selected:false
      },
      {
        title: "Downtown Abbey",
        img: "https://ewedit.files.wordpress.com/2019/03/da_andy.jpg?w=1800&h=2650",
        description: "Downtown Abbey, la película",
        selected:false
      },
      {
        title: "Proyecto Geminis",
        img: "https://m.media-amazon.com/images/M/MV5BNjI5OTNkMzUtZDYzYy00NWQ5LTg4YzYtZmZjZDI0MGQzNGY2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
        description: "Proyecto Geminis",
        selected:false
      },
      {
        title: "Zombieland 2",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zombieland-2-teaser-poster-1548837272.jpg",
        description: "Zombieland 2",
        selected:false
      },

    ]
  }
  render() {
    return (
      <React.Fragment>

        {this.Movies.map((movie, key) => {
          return <MovieDetails
            image={movie.img}
            title={movie.title}
            description={movie.description}
            selected={movie.selected}
            key={key}/>
        })
        }
      </React.Fragment>
    )

  }

}

export default MovieCard;