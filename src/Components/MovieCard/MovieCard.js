import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { ThemeProvider } from '@material-ui/styles';
import './MovieCard.css';
import '../../Styles/Commons.css'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#D700A9' }
  },
});

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
    }
  }



  handleChange(e) {
    const movie = e.target.value;
    this.setState({
      selectedValue: movie
    })
  }
  render() {
    return (
      <form className="moviedetails-card" onSubmit={(e) => this.handleFormSubmit(e)}>
        <article className="radio-card">
          <img
            src="https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg"
            alt=""
            width="120"
            height="160" />
          <label className="container" tabIndex="0">
            <h2>
              <i lang="en">The Joker</i>
            </h2>
            <input onChange={e => this.handleChange(e)} type="radio" value="The_Joker" checked={this.state.selectedValue === "The_Joker"} name="movie-selection" aria-labelledby="Ver The Joker" />
            <p>La peli del joker</p>
            <span className="checkmark"></span>
          </label>

          <ThemeProvider theme={theme}>
            <ButtonGroup
              className="button"
              variant="contained"
              size="small"
              color="primary"
            //aria-label="large contained secondary button group"
            >
              <Button>Ver trailer<i className="sr-only"> de <i lang="en">The Joker</i> </i></Button>
              <Button>Más info<i className="sr-only">de <i lang="en">The Joker</i> </i></Button>
            </ButtonGroup>

          </ThemeProvider>
        </article>
        <article className="radio-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZjJiYTExOTAtNWU0Yi00NzJjLTkwOTgtOTU2NWM1ZjJmYWVhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt=""
            width="120"
            height="160" />
          <label className="container" tabIndex="0">
            <h2>
              Malefica
            </h2>
            <input onChange={e => this.handleChange(e)} type="radio" value="Malefica" checked={this.state.selectedValue === "Malefica"} name="movie-selection" aria-labelledby="Ver Malefica" />
            <p>La peli del Malefica</p>
            <span className="checkmark"></span>
          </label>
          <button>Ver trailer<i className="sr-only"> de Malefica </i></button>
          <button>Más info<i className="sr-only">de Malefica </i></button>
        </article>
        <article className="radio-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_.jpg"
            alt=""
            width="120"
            height="160" />
          <label className="container" tabIndex="0">
            <h2>
              Doctor <i lang="en">Sleep</i>
            </h2>
            <input onChange={e => this.handleChange(e)} type="radio" value="Doctor_Sleep" checked={this.state.selectedValue === "Doctor_Sleep"} name="movie-selection" aria-labelledby="Ver Doctor Sleep" />
            <p>La peli de Doctor <i lang="en">Sleep</i></p>
            <span className="checkmark"></span>
          </label>
          <button>Ver trailer<i className="sr-only"> de Doctor <i lang="en">Sleep</i> </i></button>
          <button>Más info<i className="sr-only">de Doctor <i lang="en">Sleep</i></i></button>
        </article>
        <article className="radio-card">
          <img
            src="https://ewedit.files.wordpress.com/2019/03/da_andy.jpg?w=1800&h=2650"
            alt=""
            width="120"
            height="160" />
          <label className="container" tabIndex="0">
            <h2>
              <i lang="en">Downtown Abbey</i>
            </h2>
            <input onChange={e => this.handleChange(e)} type="radio" value="Downtown_Abbey" checked={this.state.selectedValue === "Downtown_Abbey"} name="movie-selection" aria-labelledby="Ver Downtown Abbey" />
            <p><i lang="en">Downtown Abbey</i> la peli</p>
            <span className="checkmark"></span>
          </label>
          <button>Ver trailer<i className="sr-only"> de <i lang="en">Downtown Abbey</i> </i></button>
          <button>Más info<i className="sr-only">de <i lang="en">Downtown Abbey</i></i></button>
        </article>
        <article className="radio-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNjI5OTNkMzUtZDYzYy00NWQ5LTg4YzYtZmZjZDI0MGQzNGY2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
            alt=""
            width="120"
            height="160" />
          <label className="container" tabIndex="0">
            <h2>
              Proyecto Géminis
            </h2>
            <input onChange={e => this.handleChange(e)} type="radio" value="Proyecto_Geminis" checked={this.state.selectedValue === "Proyecto_Geminis"} name="movie-selection" aria-labelledby="Ver Proyecto Géminis" />
            <p>Proyecto Géminis, la peli</p>
            <span className="checkmark"></span>
          </label>
          <button>Ver trailer<i className="sr-only"> de Proyecto Géminis </i></button>
          <button>Más info<i className="sr-only">de Proyecto Géminis</i></button>
        </article>
        <article className="radio-card">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zombieland-2-teaser-poster-1548837272.jpg"
            alt=""
            width="120"
            height="160" />
          <label className="container" tabIndex="0">
            <h2>
              <i lang="en">Zombieland</i> 2
            </h2>
            <input onChange={e => this.handleChange(e)} type="radio" value="Zombieland" checked={this.state.selectedValue === "Zombieland"} name="movie-selection" aria-labelledby="Ver Zombieland" />
            <p><i lang="en">Zombieland</i> 2, la peli</p>
            <span className="checkmark"></span>
          </label>
          <button>Ver trailer<i className="sr-only"> de <i lang="en">Zombieland</i> 2 </i></button>
          <button>Más info<i className="sr-only">de <i lang="en">Zombieland</i> 2</i></button>
        </article>
        <button type="submit" aria-label="Continuar con la reserva">Continuar</button>
      </form>
    )

  }

}

export default MovieCard;