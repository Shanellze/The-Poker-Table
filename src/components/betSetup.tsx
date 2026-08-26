import { StyleSheet, Text, TextInput, View } from "react-native";

type BetSetupProps = {
  balance: number;
  betInput: string;
  onBetInputChange: (value: string) => void;
};

export function BetSetup({
  balance,
  betInput,
  onBetInputChange,
}: BetSetupProps) {
  return (
    <View style={styles.betSetupContainer}>
      <Text style={styles.betTitle}>Place your bet</Text>
      <Text style={styles.betHint}>Max bet: {balance}</Text>
      <TextInput
        value={betInput}
        onChangeText={onBetInputChange}
        keyboardType="number-pad"
        style={styles.betInput}
        placeholder="Enter bet"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  betSetupContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  betTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },
  betHint: {
    fontSize: 14,
    marginBottom: 12,
  },
  betInput: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 18,
    textAlign: "center",
  },
});
