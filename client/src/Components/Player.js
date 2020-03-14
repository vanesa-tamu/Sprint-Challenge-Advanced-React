import React from 'react'


//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from '@material-ui/core';
import useDark from './UseDark'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    //   color: 'blue',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      maxWidth: 280,
      maxHeight: 300,
      minHeight: 100
    
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    searches: {
        fontSize: 10
    },
    pos: {
      marginBottom: 12,
    },
  });

const Player = (props) => {
    const { player } = props;
    console.log('Player prop', props)
    const classes = useStyles();
    return(
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {player.country}
                </Typography>

                <Typography variant="h5" component="h2"> 
                    {player.name}
                 </Typography>

                 <Typography className={classes.searches} color="textSecondary" gutterBottom>
                    Searches: {player.searches}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Player