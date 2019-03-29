import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './InputComponent';
import Table from './table';
import ListOfPlayers from './listOfPlayers';
import shuffle from './shuffle';
import winner from './winner';
import ListOfSets from './listOfSets';

export default class App extends Component {
    state = {
        shuffledDeck: shuffle(),
        playersCount: 0,
        players: [],
        table: [],
        listOfSets: []

    }
    giveCard = (count = 1) => {
        let someCards = [];
        for (let index = 0; index < count; index++) {
            someCards.push(this.state.shuffledDeck[0])
            this.state.shuffledDeck.shift()
        }
        return someCards;
    }

    onPlayerAdded = (name) => {
        if (this.state.playersCount < 10) {
            this.setState((state) => {
                const player = this.createPlayer(name);
                player.hand = this.giveCard(2)
                return { players: [...state.players, player],
                    playersCount : this.state.playersCount+1 };
            })
        }
    };

    createPlayer = (name) => {
        return {
            name,
            hand: []
        };
    }

    nextCard = () => {
        switch (this.state.table.length) {
            case 0:
                this.setState((state) => {
                    const s = this.giveCard(3)
                    return { table: [...state.table, s] };
                })
                break;
            case 1:
                this.setState((state) => {
                    const s = this.giveCard(1)
                    return { table: [...state.table, s] };
                })
                break;
            case 2:
                this.setState((state) => {
                    const s = this.giveCard(1)
                    return { table: [...state.table, s] };
                })
                break;
            default:
                alert('table is full');
        }
    }


    endGame = () => {
        let rs = [];
        let res = this.state.players;
        res.forEach(player => {
            rs.push({
                name: player.name,
                set: winner([...player.hand, ...this.state.table[0], ...this.state.table[1], ...this.state.table[2]])
            }
            )
        });
        this.setState((state) => {
            return { listOfSets: [...state.listOfSets, ...rs] };
        })

    }


    render() {
        return (<div>
            <Form type="text" placeholder="Имя" onPlayerAdded={this.onPlayerAdded} />
            <ListOfPlayers players={this.state.players} />
            <hr></hr>
            <Table table={this.state.table} nextCard={this.nextCard} />
            <hr></hr>
            <ListOfSets listOfSets={this.state.listOfSets} endGame={this.endGame} />
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));