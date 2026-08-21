import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Game() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          router.push("/instructions");
        }}
        style={({ pressed }) => [
          styles.instructionButton,
          pressed && styles.instructionButtonPressed,
        ]}
      >
        <Text style={styles.instructionButtonText}>i</Text>
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
        <View style={styles.card}>
          <Text>Card 1</Text>
          <Text>10</Text>
          <Text>spades</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
          <Text>9</Text>
          <Text>hearts</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 3</Text>
          <Text>5</Text>
          <Text>diamond</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 4</Text>
          <Text>A</Text>
          <Text>clover</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 5</Text>
          <Text>Q</Text>
          <Text>hearts</Text>
        </View>
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
  instructionButton: {
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
  instructionButtonPressed: {
    backgroundColor: "#d9d9d9",
  },
  instructionButtonText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22,
    color: "#1a1a1a",
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
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
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
