export type Suit =
  | "hearts"
  | "diamonds"
  | "clubs"
  | "spades"
  | "red joker"
  | "black joker";
export type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A"
  | "JOKER";

export type Card = {
  id: string;
  rank: Rank;
  suit: Suit;
  value: number;
};

export const cardImageMap: Record<string, any> = {
  "2-hearts": require("../../assets/images/cards/2_of_hearts.png"),
  "3-hearts": require("../../assets/images/cards/3_of_hearts.png"),
  "4-hearts": require("../../assets/images/cards/4_of_hearts.png"),
  "5-hearts": require("../../assets/images/cards/5_of_hearts.png"),
  "6-hearts": require("../../assets/images/cards/6_of_hearts.png"),
  "7-hearts": require("../../assets/images/cards/7_of_hearts.png"),
  "8-hearts": require("../../assets/images/cards/8_of_hearts.png"),
  "9-hearts": require("../../assets/images/cards/9_of_hearts.png"),
  "10-hearts": require("../../assets/images/cards/10_of_hearts.png"),
  "J-hearts": require("../../assets/images/cards/jack_of_hearts.png"),
  "Q-hearts": require("../../assets/images/cards/queen_of_hearts.png"),
  "K-hearts": require("../../assets/images/cards/king_of_hearts.png"),
  "A-hearts": require("../../assets/images/cards/ace_of_hearts.png"),
  "2-diamonds": require("../../assets/images/cards/2_of_diamonds.png"),
  "3-diamonds": require("../../assets/images/cards/3_of_diamonds.png"),
  "4-diamonds": require("../../assets/images/cards/4_of_diamonds.png"),
  "5-diamonds": require("../../assets/images/cards/5_of_diamonds.png"),
  "6-diamonds": require("../../assets/images/cards/6_of_diamonds.png"),
  "7-diamonds": require("../../assets/images/cards/7_of_diamonds.png"),
  "8-diamonds": require("../../assets/images/cards/8_of_diamonds.png"),
  "9-diamonds": require("../../assets/images/cards/9_of_diamonds.png"),
  "10-diamonds": require("../../assets/images/cards/10_of_diamonds.png"),
  "J-diamonds": require("../../assets/images/cards/jack_of_diamonds.png"),
  "Q-diamonds": require("../../assets/images/cards/queen_of_diamonds.png"),
  "K-diamonds": require("../../assets/images/cards/king_of_diamonds.png"),
  "A-diamonds": require("../../assets/images/cards/ace_of_diamonds.png"),
  "2-clubs": require("../../assets/images/cards/2_of_clubs.png"),
  "3-clubs": require("../../assets/images/cards/3_of_clubs.png"),
  "4-clubs": require("../../assets/images/cards/4_of_clubs.png"),
  "5-clubs": require("../../assets/images/cards/5_of_clubs.png"),
  "6-clubs": require("../../assets/images/cards/6_of_clubs.png"),
  "7-clubs": require("../../assets/images/cards/7_of_clubs.png"),
  "8-clubs": require("../../assets/images/cards/8_of_clubs.png"),
  "9-clubs": require("../../assets/images/cards/9_of_clubs.png"),
  "10-clubs": require("../../assets/images/cards/10_of_clubs.png"),
  "J-clubs": require("../../assets/images/cards/jack_of_clubs.png"),
  "Q-clubs": require("../../assets/images/cards/queen_of_clubs.png"),
  "K-clubs": require("../../assets/images/cards/king_of_clubs.png"),
  "A-clubs": require("../../assets/images/cards/ace_of_clubs.png"),
  "2-spades": require("../../assets/images/cards/2_of_spades.png"),
  "3-spades": require("../../assets/images/cards/3_of_spades.png"),
  "4-spades": require("../../assets/images/cards/4_of_spades.png"),
  "5-spades": require("../../assets/images/cards/5_of_spades.png"),
  "6-spades": require("../../assets/images/cards/6_of_spades.png"),
  "7-spades": require("../../assets/images/cards/7_of_spades.png"),
  "8-spades": require("../../assets/images/cards/8_of_spades.png"),
  "9-spades": require("../../assets/images/cards/9_of_spades.png"),
  "10-spades": require("../../assets/images/cards/10_of_spades.png"),
  "J-spades": require("../../assets/images/cards/jack_of_spades.png"),
  "Q-spades": require("../../assets/images/cards/queen_of_spades.png"),
  "K-spades": require("../../assets/images/cards/king_of_spades.png"),
  "A-spades": require("../../assets/images/cards/ace_of_spades.png"),
  "red-joker": require("../../assets/images/cards/red_joker.png"),
  "black-joker": require("../../assets/images/cards/black_joker.png"),
};

export function getCardImageSource(card: Card) {
  return cardImageMap[card.id] ?? cardImageMap["red-joker"];
}

const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
const ranks: Rank[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const rankValues: Record<Rank, number> = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
  JOKER: 15,
};

export function buildDeck(): Card[] {
  const standardDeck = suits.flatMap((suit) =>
    ranks.map((rank) => ({
      id: `${rank}-${suit}`,
      rank,
      suit,
      value: rankValues[rank],
    })),
  );

  return [
    ...standardDeck,
    {
      id: "red-joker",
      rank: "JOKER",
      suit: "red joker",
      value: rankValues["JOKER"],
    },
    {
      id: "black-joker",
      rank: "JOKER",
      suit: "black joker",
      value: rankValues["JOKER"],
    },
  ];
}

export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

export function drawCards(
  deck: Card[],
  count: number,
): { cards: Card[]; remainingDeck: Card[] } {
  const cards = deck.slice(0, count);
  const remainingDeck = deck.slice(count);

  return { cards, remainingDeck };
}

export function dealHand(
  deck: Card[],
  handSize: number = 5,
): { hand: Card[]; remainingDeck: Card[] } {
  const { cards, remainingDeck } = drawCards(deck, handSize);

  return { hand: cards, remainingDeck };
}

export function createFreshDeck(): { deck: Card[]; shuffledDeck: Card[] } {
  const deck = buildDeck();
  const shuffledDeck = shuffleDeck(deck);

  return { deck, shuffledDeck };
}

export function swapSelectedCards(
  hand: Card[],
  selectedIndexes: number[],
  remainingDeck: Card[],
): { updatedHand: Card[]; updatedRemainingDeck: Card[] } {
  const nextHand = [...hand];
  const nextDeck = [...remainingDeck];

  selectedIndexes.forEach((index) => {
    const replacementCard = nextDeck.shift();

    if (replacementCard) {
      nextHand[index] = replacementCard;
    }
  });

  return {
    updatedHand: nextHand,
    updatedRemainingDeck: nextDeck,
  };
}
