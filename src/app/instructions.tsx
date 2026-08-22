import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Instructions() {
  const router = useRouter();

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.overlayTapArea} onPress={() => router.back()} />
      <View style={styles.instructionContainer}>
        {/* Title */}
        <Text style={styles.instructionTitle}>How to Play</Text>
        <View style={styles.instructionList}>
          <Text>
            - Form a winning poker hand by exchanging cards from your 5-card
            hand. Winnings are paid in chips.
          </Text>
          <Text>
            - The game uses a 54-card deck, consisting of 52 standard cards and
            2 Jokers.
          </Text>
          <Text>
            - Players are dealt a 5-card hand, and they can choose to hold or
            swap any number of cards.
          </Text>
          <Text>- Select the card(s) you want to exchange from your hand.</Text>
          <Text>
            - Press the "Swap" button to exchange the selected cards for new
            ones from the deck.
          </Text>
          <Text>- If you don't make a winning hand, you lose your bet.</Text>
          <Text>
            - Once you have a winning poker hand, you can choose to double up.
          </Text>
          <Text>
            - If you choose not to double up, you can collect your winnings from
            that hand.
          </Text>
          <Text>
            - To double up, guess whether the next card dealt will be higher or
            lower than the previous card. If your guess is correct, your
            winnings are doubled.
          </Text>
          <Text>- You can double up up to 10 times in a row.</Text>
          <Text>
            - If two cards of the same value are dealt, it counts as a win.
          </Text>
          <Text>
            - If you choose to double up and guess incorrectly, you lose your
            winnings from that hand.
          </Text>
          <Text>
            - Card values for doubling up follow normal poker rankings.
          </Text>
          <Text>
            Low -&gt; 2 -&gt; 3 -&gt; 4 -&gt; ... -&gt; K -&gt; A -&gt; Joker
            -&gt; High Score
          </Text>
        </View>

        {/* Close Button */}
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.closeButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>CLOSE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPressed: {
    backgroundColor: "lightgray",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  overlayTapArea: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  instructionContainer: {
    width: "78%",
    maxWidth: 900,
    borderRadius: 14,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    gap: 8,
  },
  instructionList: {
    marginTop: 8,
    gap: 4,
  },
  instructionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 16,
    width: 64,
    fontWeight: "600",
  },
  closeButton: {
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 46,
    borderRadius: 6,
    backgroundColor: "#f1f1f1",
  },
});
