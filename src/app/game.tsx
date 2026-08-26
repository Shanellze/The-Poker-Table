import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { createFreshDeck, dealHand, type Card } from "../utils/deck";

const cardImageMap: Record<string, any> = {
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

function getCardImageSource(card: Card) {
  return cardImageMap[card.id] ?? cardImageMap["red-joker"];
}

export default function Game() {
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const { shuffledDeck } = createFreshDeck();
    const { hand } = dealHand(shuffledDeck, 5);
    setCards(hand);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          router.push("/pause");
        }}
        style={({ pressed }) => [
          styles.pauseButton,
          pressed && styles.pauseButtonPressed,
        ]}
      >
        <View style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
      </Pressable>

      {/* Displays the payout multipliers and winning combination hierarchies */}
      <View style={styles.ruleContainer}>
        <View style={styles.rule}>
          <Text>Five Of A Kind</Text>
          <Text>x100</Text>
        </View>
        <View style={styles.rule}>
          <Text>Royal Straight Flush</Text>
          <Text>x50</Text>
        </View>
        <View style={styles.rule}>
          <Text>Straight Flush</Text>
          <Text>x25</Text>
        </View>
        <View style={styles.rule}>
          <Text>Four Of A Kind</Text>
          <Text>x10</Text>
        </View>
        <View style={styles.rule}>
          <Text>Full House</Text>
          <Text>x7</Text>
        </View>
        <View style={styles.rule}>
          <Text>Flush</Text>
          <Text>x7</Text>
        </View>
        <View style={styles.rule}>
          <Text>Straight</Text>
          <Text>x5</Text>
        </View>
        <View style={styles.rule}>
          <Text>Three Of A Kind</Text>
          <Text>x3</Text>
        </View>
        <View style={styles.rule}>
          <Text>Two Pair</Text>
          <Text>x2</Text>
        </View>
        <View style={styles.rule}>
          <Text>One Pair</Text>
          <Text>x1</Text>
        </View>
      </View>

      {/* Displays which cards are held and which are swapped */}
      <View style={styles.holdCardContainer}>
        <View style={styles.holdCard}>
          <Text>Hold</Text>
        </View>
        <View style={styles.swapCard}>
          <Text>Swap</Text>
        </View>
        <View style={styles.holdCard}>
          <Text>Hold</Text>
        </View>
        <View style={styles.holdCard}>
          <Text>Hold</Text>
        </View>
        <View style={styles.holdCard}>
          <Text>Hold</Text>
        </View>
      </View>

      {/* Displays the active 5-card hand */}
      <View style={styles.cardContainer}>
        {cards.map((card, index) => (
          <View key={card.id} style={styles.card}>
            <Image
              source={getCardImageSource(card)}
              style={styles.cardImage}
              resizeMode="contain"
            />
          </View>
        ))}
      </View>

      {/* Displays the player's financial information */}
      <View style={styles.betContainer}>
        {/* Displays the player's total cumulative chips remaining  */}
        <View style={styles.balanceContainer}>
          <Text>Balance</Text>
          <Text>1000</Text>
        </View>
        {/* Displays the player's current bet */}
        <View style={styles.currentBetContainer}>
          <Text>Current Bet</Text>
          <Text>1</Text>
        </View>
      </View>

      {/* Displays the player's actions */}
      <View style={styles.actionContainer}>
        <Pressable
          onPress={() => {
            console.log("swap Pressed");
          }}
          style={({ pressed }) => [
            styles.action,
            pressed && styles.actionPressed,
          ]}
        >
          <Text>SWAP CARD</Text>
        </Pressable>
      </View>
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
  pauseButton: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  pauseButtonPressed: {
    backgroundColor: "#d9d9d9",
  },
  menuIcon: {
    width: 16,
    height: 14,
    justifyContent: "space-between",
  },
  menuLine: {
    width: "100%",
    height: 2,
    borderRadius: 2,
    backgroundColor: "#1a1a1a",
  },
  ruleContainer: {
    flexDirection: "row",
    width: "90%",
    height: "20%",
    marginHorizontal: 4,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  rule: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  holdCardContainer: {
    flexDirection: "row",
    width: "65%",
    height: "5%",
    marginTop: 45,
  },
  swapCard: {
    flex: 1,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "red",
  },
  holdCard: {
    flex: 1,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "blue",
  },
  cardContainer: {
    flexDirection: "row",
    width: "65%",
    height: "30%",
    marginTop: 25,
  },
  card: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  betContainer: {
    flexDirection: "row",
    width: "90%",
    height: "10%",
    marginTop: 60,
    backgroundColor: "white",
  },
  balanceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  currentBetContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionContainer: {
    flexDirection: "row",
    width: "90%",
    height: "10%",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
  action: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  actionPressed: {
    backgroundColor: "#c91c1c",
  },
});
