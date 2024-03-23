export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';

export type Rank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';

export type Card = FaceUpCard | FaceDownCard;

export type FaceUpCard = {
    suit: Suit;
    rank: Rank;
    shown: true;
}

export type FaceDownCard = {
    shown: false;
}

export const suits: Suit[] = ['clubs', 'diamonds', 'hearts', 'spades']

export const suitSymbol = (suit: Suit): string => {
    switch (suit) {
        case 'diamonds':
            return '♦';
        case 'hearts':
            return '♥';
        case 'spades':
            return '♠';
        case 'clubs':
            return '♣';
    }
};

export const suitColor = (suit: Suit): string => {
    switch (suit) {
        case 'clubs':
        case 'spades':
            return 'black';
        case 'diamonds':
        case 'hearts':
            return 'red';
    }
};
