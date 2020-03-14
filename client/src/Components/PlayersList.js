import React from 'react'
import Player from './Player.js'
import Grid from '@material-ui/core/Grid'

const PlayerList = (props) => {
    const { players } = props
    console.log('PL props', props)
    return (
        <Grid container spacing={3}  justify='center'>
            {players.map(player => (
                <Grid item key={player.id}>
                    <Player player={player}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default PlayerList