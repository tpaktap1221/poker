export default function shuffle() {

    let deck = [];

    function createDeck(suit) {
        for (let index = 2; index < 15; index++) {
            deck.push({ suit: suit, rang: index })
        }
    }

    ['Черви', 'Пика', 'Буба', 'Крести'].forEach(el => createDeck(el))

    return deck.sort(function () {
        return 0.5 - Math.random();
    });
};