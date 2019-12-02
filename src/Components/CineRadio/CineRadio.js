import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import './MovieDetails.css';
import '../../Styles/Commons.css'

const styles = theme => ({
    card: {
        width: 200,
        maxWidth: 200,
        height: 250,
        margin: 10,
    },
});

class MovieDetails extends React.Component {
    

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card} >
                <Link to={{
                pathname: '/filter',
                state: {
                  peli: this.props.title
                }
              }}>
                <CardActionArea>
                        <CardMedia
                            component="img"
                            alt=""
                            className="movie-img"
                            image={this.props.image}
                            title={this.props.title}
                        />
                        <CardContent className="flex-column cardContent">
                            <Typography gutterBottom component="h3" className="card-header">
                                {this.props.title}
                            </Typography>
                            <Typography color="textSecondary" component="p" className="card-bajada">
                                122 min <i role="presentation">|</i> P16 <i role="presentation">|</i> Drama
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions className="flex">
                    <Button size="small" className="button-verde--align-right">
                        Ver más
                    </Button>
                </CardActions>
            </Card>
        )
    }

}

export default withStyles(styles)(MovieDetails);