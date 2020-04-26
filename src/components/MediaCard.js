import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { robots } from '../robots'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    maxWidth: 200

  },
  text: {
    height: 150,
    maxWidth: 200

  }, email: {
    height: 150,
    maxWidth: 200

  }
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <div className='card dib br3 pa3 ma2 grow bw2 shadow-3'>
       
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          alt ='robots' image={'https://robohash.org/' + props.id + '?200x200'}
        />
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="h5" component="h2">
           { props.name }
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {props.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default MediaCard;