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
