import React from 'react';

const ListOfPlayers = ({ players }) => {

    const list = players.map((player) => {
        const newHand = player.hand.map(a => {
            return a.suit + a.rang + ' ';
        })
        return (
            <li key={player.name} >{player.name}: {newHand}</li>
        );
    });

    return (<div><ul className="list-group">{list}</ul></div>);

}
export default ListOfPlayers;