import React from 'react'
import Player from './Player.js'


const PlayerList = (props) => {
    const { players } = props
    console.log('PL props', props)
    return (
        <div>
            {players.map(player => (
                <Player player={player} key={player.id}/>
            ))}
        </div>
    )
}

export default PlayerList