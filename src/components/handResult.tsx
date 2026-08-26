import { StyleSheet, Text, View } from "react-native";

type HandResultProps = {
  handResult: string;
};

export function HandResult({ handResult }: HandResultProps) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultLabel}>Hand:</Text>
      <Text style={styles.resultValue}>{handResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    width: "75%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    marginTop: 12,
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  resultValue: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 4,
  },
});
