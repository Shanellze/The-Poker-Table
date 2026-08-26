import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ActionButton } from "../components/actionButton";
import { BetSetup } from "../components/betSetup";
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
import { evaluateHand } from "../utils/winningHands";

export default function Game() {
  const maxBalance = 1000;
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

    setCards(nextHand);
    setRemainingDeck(nextDeck);
    setSelectedCards([false, false, false, false, false]);
    setHandResult(evaluatedHand === "Nothing" ? "Nothing" : evaluatedHand);
  };

  return (
    <View style={styles.container}>
      <PauseButton />

      <RuleList />

      {!isRoundStarted ? (
        <BetSetup
          balance={balance}
          betInput={betInput}
          onBetInputChange={(value) => {
            const cleaned = value.replace(/[^\d]/g, "");
            const numericValue = Number(cleaned || "0");
            const cappedValue = Math.min(numericValue, balance);
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
          <ActionButton label="CONFIRM" onPress={handleConfirmTurn} />
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
