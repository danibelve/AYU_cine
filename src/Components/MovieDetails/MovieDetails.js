import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        maxWidth: 250,
        width: 250,
        margin: 10,
    },
});

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt=""
                        height="200"
                        image={this.props.image}
                        title={this.props.title}
                    />
                    <CardContent>
                        <Radio
                            checked={this.props.selected}
                            value={this.props.title}
                            name="movie-selection"
                            inputProps={{ 'aria-label': this.props.title, 'aria-checked': this.props.selected}}
                        />
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Ver Trailer
                    </Button>
                    <Button size="small" color="primary">
                        Más info
                    </Button>
                </CardActions>
            </Card>
        )
    }

}

export default withStyles(styles)(MovieDetails);