export type RuleName =
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

export type Rule = {
  name: RuleName;
  multiplier: string;
};

export const RULES: Rule[] = [
  { name: "Five of a Kind", multiplier: "x100" },
  { name: "Royal Straight Flush", multiplier: "x50" },
  { name: "Straight Flush", multiplier: "x25" },
  { name: "Four of a Kind", multiplier: "x10" },
  { name: "Full House", multiplier: "x7" },
  { name: "Flush", multiplier: "x7" },
  { name: "Straight", multiplier: "x5" },
  { name: "Three of a Kind", multiplier: "x3" },
  { name: "Two Pair", multiplier: "x2" },
  { name: "One Pair", multiplier: "x1" },
];
