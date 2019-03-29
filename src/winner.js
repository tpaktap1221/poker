import { isFlash, isStreet } from './checkFlashOrStreet';

export default function winner(arr) {

    function isRepeatElements(elem, pos, arr) {
        return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
    }

    let sortedRangs = [];
    arr.forEach(el => sortedRangs.push(el.rang))
    sortedRangs.sort((a, b) => a - b);
    let repRangs = sortedRangs.slice();
    repRangs = repRangs.filter(isRepeatElements);

    let repSiuts = [];
    arr.forEach(el => repSiuts.push(el.suit))
    repSiuts.sort();
    repSiuts = repSiuts.filter(isRepeatElements);

    let street = isStreet(sortedRangs);
    let flash = isFlash(repSiuts);

    switch (true) {
        case (street && flash && (sortedRangs[sortedRangs.length - 1] === 14)):
            return ('Роял Стрит Флеш');
        case (street && flash):
            return ('Стрит Флеш');
        case ((repRangs.length === 4 || repRangs.length > 5) && (repRangs[0] === repRangs[3] || repRangs[2] === repRangs[5])):
            return ('Каре');
        case (repRangs.length === 5 && repRangs[0] !== repRangs[4]):
            return ('Фулл Хаус');
        case (flash):
            return ('Флеш')
        case (street):
            return ('Стрит');
        case (repRangs.length === 3):
            return ('Тройка');
        case (repRangs.length >= 4 && repRangs[0] !== repRangs[3]):
            return ('Две пары');
        case (repRangs.length === 2):
            return ('Пара');
         default:
            return ('Смотрите старшую карту')
    }

}