import React from 'react';


const ListOfSets = ({ listOfSets, endGame }) => {

    const list = listOfSets.map((player) => {
        return <li key={player.name} >{player.name}: {player.set}</li>
    })

    return (<div>
        <button
            className='btn-danger'
            onClick={endGame}>
            End Game</button>
        <ul className="list-group">{list}</ul></div>);
}

export default ListOfSets;

