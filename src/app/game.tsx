import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ActionButton } from "../components/actionButton";
import { BetSetup } from "../components/betSetup";
import { CardOrderList } from "../components/cardOrderList";
import { HandResult } from "../components/handResult";
import { HoldSwapLabels } from "../components/holdSwapLabels";
import { PauseButton } from "../components/pauseButton";
import { PlayerBank } from "../components/playerBank";
import { PlayersHand } from "../components/playersHand";
import { RuleList } from "../components/ruleList";
import {
  createFreshDeck,
  dealHand,
  swapSelectedCards,
  type Card,
} from "../utils/deck";
import { RULES } from "../utils/rule";
import { evaluateHand } from "../utils/winningHands";

export default function Game() {
  const router = useRouter();
  const maxBalance = 1000;
  const gameOverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [remainingDeck, setRemainingDeck] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [handResult, setHandResult] = useState<string>("Pending");
  const [balance, setBalance] = useState(maxBalance);
  const [bet, setBet] = useState(1);
  const [betInput, setBetInput] = useState("1");
  const [isRoundStarted, setIsRoundStarted] = useState(false);

  useEffect(() => {
    return () => {
      if (gameOverTimeoutRef.current) {
        clearTimeout(gameOverTimeoutRef.current);
      }
    };
  }, []);

  const dealRound = () => {
    const { shuffledDeck } = createFreshDeck();
    const { hand, remainingDeck: leftDeck } = dealHand(shuffledDeck, 5);
    setCards(hand);
    setRemainingDeck(leftDeck);
    setSelectedCards([false, false, false, false, false]);
    setHandResult("Pending");
    setIsRoundStarted(true);
  };

  const confirmBet = () => {
    const parsedBet = Number(betInput) || 0;
    const safeBet = Math.min(Math.max(Math.round(parsedBet), 1), balance);

    setBalance((currentBalance) => currentBalance - safeBet);
    setBet(safeBet);
    setBetInput(String(safeBet));
    dealRound();
  };

  const toggleCardSelection = (index: number) => {
    if (!isRoundStarted) {
      return;
    }

    setSelectedCards((current) =>
      current.map((selected, currentIndex) =>
        currentIndex === index ? !selected : selected,
      ),
    );
  };

  const handleConfirmTurn = () => {
    if (!isRoundStarted) {
      return;
    }

    const indexesToSwap = selectedCards
      .map((selected, index) => (selected ? index : -1))
      .filter((index) => index >= 0);

    let nextHand = [...cards];
    let nextDeck = [...remainingDeck];

    if (indexesToSwap.length > 0) {
      const result = swapSelectedCards(cards, indexesToSwap, remainingDeck);
      nextHand = result.updatedHand;
      nextDeck = result.updatedRemainingDeck;
    }

    const evaluatedHand = evaluateHand(nextHand);
    const hasWon = evaluatedHand !== "Nothing";
    const payoutRule = RULES.find((rule) => rule.name === evaluatedHand);
    const multiplier = payoutRule ? Number(payoutRule.multiplier.slice(1)) : 0;

    setCards(nextHand);
    setRemainingDeck(nextDeck);
    setSelectedCards([false, false, false, false, false]);

    if (hasWon) {
      const winnings = bet * multiplier;
      setBalance((currentBalance) => currentBalance + winnings);
      setBet(winnings);
      setHandResult(`Won - ${evaluatedHand} (${winnings})`);
      if (gameOverTimeoutRef.current) {
        clearTimeout(gameOverTimeoutRef.current);
      }
      gameOverTimeoutRef.current = setTimeout(() => {
        router.replace("/");
      }, 5000);
      return;
    }

    setHandResult(
      `Lost - ${evaluatedHand === "Nothing" ? "No Pair" : evaluatedHand}`,
    );
    if (gameOverTimeoutRef.current) {
      clearTimeout(gameOverTimeoutRef.current);
    }
    gameOverTimeoutRef.current = setTimeout(() => {
      router.replace("/");
    }, 5000);
  };

  const isRoundResolved = handResult !== "Pending";

  return (
    <View style={styles.container}>
      <PauseButton />

      {isRoundResolved ? <CardOrderList /> : <RuleList />}

      {!isRoundStarted ? (
        <BetSetup
          balance={balance}
          betInput={betInput}
          onBetInputChange={(value) => {
            const cleaned = value.replace(/[^\d]/g, "");
            const numericValue = Number(cleaned || "0");
            const cappedValue = Math.min(numericValue, balance);
            setBet(cappedValue);
            setBetInput(String(cappedValue));
          }}
        />
      ) : null}

      {isRoundStarted ? (
        <>
          {/* Displays which cards are held and which are swapped */}
          <HoldSwapLabels selectedCards={selectedCards} />

          {/* Displays the active 5-card hand */}
          <PlayersHand
            cards={cards}
            selectedCards={selectedCards}
            onCardPress={toggleCardSelection}
          />
        </>
      ) : null}

      {isRoundStarted ? <HandResult handResult={handResult} /> : null}

      {/* Displays the player's financial information */}
      <PlayerBank
        balance={balance}
        bet={bet}
        betInput={betInput}
        isRoundStarted={isRoundStarted}
      />

      {!isRoundStarted ? (
        <View style={styles.actionContainer}>
          <ActionButton label="CONFIRM" onPress={confirmBet} />
        </View>
      ) : (
        <View style={styles.actionContainer}>
          <ActionButton
            label={isRoundResolved ? "MAIN MENU" : "CONFIRM"}
            onPress={
              isRoundResolved ? () => router.replace("/") : handleConfirmTurn
            }
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionContainer: {
    flexDirection: "row",
    width: "90%",
    height: "10%",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
});
