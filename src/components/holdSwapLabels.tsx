import { StyleSheet, Text, View } from "react-native";

type HoldSwapLabelsProps = {
  selectedCards: boolean[];
};

export function HoldSwapLabels({ selectedCards }: HoldSwapLabelsProps) {
  return (
    <View style={styles.holdCardContainer}>
      {selectedCards.map((isSelected, index) => (
        <View
          key={`label-${index}`}
          style={isSelected ? styles.swapCard : styles.holdCard}
        >
          <Text>{isSelected ? "Swap" : "Hold"}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  holdCardContainer: {
    flexDirection: "row",
    width: "59%",
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
});
