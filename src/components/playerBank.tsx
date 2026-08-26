import { StyleSheet, Text, View } from "react-native";

type PlayerBankProps = {
  balance: number;
  bet: number;
  betInput: string;
  isRoundStarted: boolean;
};

export function PlayerBank({
  balance,
  bet,
  betInput,
  isRoundStarted,
}: PlayerBankProps) {
  return (
    <View style={styles.betContainer}>
      <View style={styles.balanceContainer}>
        <Text>Balance</Text>
        <Text>{balance}</Text>
      </View>
      <View style={styles.currentBetContainer}>
        <Text>Current Bet</Text>
        <Text>{isRoundStarted ? bet : betInput || 0}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
