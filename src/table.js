import React from 'react';


    const cardsOnTable = ({ table, nextCard }) => {

        const list = table.map((card) => {
            const s = card.map(a => {
                return a.suit + a.rang + ' '
            })
            return (
                <li key={s}>{s}</li>
            );
        });
      
        return (<div>
            <button
                className='btn-warning'
                onClick={nextCard}>
                Next Card</button>
            <ul className="list-group">{list}</ul></div>);
    }

export default cardsOnTable;