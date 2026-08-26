import type { Card, Suit } from "./deck";

export type HandRank =
  | "One Pair"
  | "Two Pair"
  | "Three of a Kind"
  | "Straight"
  | "Flush"
  | "Full House"
  | "Four of a Kind"
  | "Straight Flush"
  | "Royal Straight Flush"
  | "Five of a Kind";

function hasRoyalStraight(values: number[], jokerCount: number = 0): boolean {
  const royalValues = [10, 11, 12, 13, 14];
  let remainingJokers = jokerCount;

  return royalValues.every((value) => {
    if (values.includes(value)) {
      return true;
    }

    if (remainingJokers > 0) {
      remainingJokers -= 1;
      return true;
    }

    return false;
  });
}

function getStraightHigh(values: number[]): number | null {
  const unique = [...new Set(values)].sort((a, b) => a - b);

  if (unique.length < 5) {
    return null;
  }

  const lowStraight = [2, 3, 4, 5, 14];
  const useLowStraight = lowStraight.every((value) => unique.includes(value));

  if (useLowStraight) {
    return 5;
  }

  for (let i = 0; i <= unique.length - 5; i++) {
    const window = unique.slice(i, i + 5);
    const isSequential = window.every((value, index) =>
      index === 0 ? true : value === window[index - 1] + 1,
    );

    if (isSequential) {
      return window[4];
    }
  }

  return null;
}

function evaluateFiveCardHand(
  values: number[],
  suits: Suit[],
  jokerCount: number = 0,
): HandRank | "Nothing" {
  const counts = new Map<number, number>();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  const countValues = [...counts.values()].sort((a, b) => b - a);
  const straightHigh = getStraightHigh(values);
  const isFlush = new Set(suits).size === 1;
  const isRoyalStraight = hasRoyalStraight(values, jokerCount);

  if (countValues[0] === 5) {
    return "Five of a Kind";
  }

  if (isFlush && isRoyalStraight) {
    return "Royal Straight Flush";
  }

  if (isFlush && straightHigh !== null) {
    return "Straight Flush";
  }

  if (countValues[0] === 4) {
    return "Four of a Kind";
  }

  if (countValues[0] === 3 && countValues[1] === 2) {
    return "Full House";
  }

  if (isFlush) {
    return "Flush";
  }

  if (straightHigh !== null) {
    return "Straight";
  }

  if (countValues[0] === 3) {
    return "Three of a Kind";
  }

  if (countValues[0] === 2 && countValues[1] === 2) {
    return "Two Pair";
  }

  if (countValues[0] === 2) {
    return "One Pair";
  }

  return "Nothing";
}

export function evaluateHand(hand: Card[]): HandRank | "Nothing" {
  const nonJokers = hand.filter((card) => card.rank !== "JOKER");
  const jokerCount = hand.length - nonJokers.length;

  if (jokerCount === 0) {
    return evaluateFiveCardHand(
      nonJokers.map((card) => card.value),
      nonJokers.map((card) => card.suit),
      0,
    );
  }

  const rankValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
  const bestRankings: Array<HandRank | "Nothing"> = [];

  const assignJokers = (
    index: number,
    values: number[],
    suitsForHand: Suit[],
  ) => {
    if (index === jokerCount) {
      bestRankings.push(evaluateFiveCardHand(values, suitsForHand, jokerCount));
      return;
    }

    for (const value of rankValues) {
      for (const suit of suits) {
        assignJokers(index + 1, [...values, value], [...suitsForHand, suit]);
      }
    }
  };

  const baseValues = nonJokers.map((card) => card.value);
  const baseSuits = nonJokers.map((card) => card.suit);
  assignJokers(0, baseValues, baseSuits);

  const ordering: Record<HandRank | "Nothing", number> = {
    Nothing: 0,
    "One Pair": 1,
    "Two Pair": 2,
    "Three of a Kind": 3,
    Straight: 4,
    Flush: 5,
    "Full House": 6,
    "Four of a Kind": 7,
    "Straight Flush": 8,
    "Royal Straight Flush": 9,
    "Five of a Kind": 10,
  };

  const best = bestRankings.reduce((winner, current) =>
    ordering[current] > ordering[winner] ? current : winner,
  );

  return ordering[best] >= 1 ? best : "Nothing";
}
