import { StyleSheet, Text, View } from "react-native";

const cardOrder = [
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "10" },
  { name: "J" },
  { name: "Q" },
  { name: "K" },
  { name: "A" },
  { name: "Joker" },
] as const;

export function CardOrderList() {
  return (
    <View style={styles.cardOrderContainer}>
      {cardOrder.flatMap((card, index) => [
        <View key={`${card.name}-card`} style={styles.cardOrderItem}>
          <Text>{card.name}</Text>
        </View>,
        index < cardOrder.length - 1 ? (
          <View key={`${card.name}-arrow`} style={styles.arrowItem}>
            <Text style={styles.arrow}>-&gt;</Text>
          </View>
        ) : null,
      ])}
    </View>
  );
}

const styles = StyleSheet.create({
  cardOrderContainer: {
    flexDirection: "row",
    width: "90%",
    height: "20%",
    marginHorizontal: 4,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  cardOrderItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  arrow: {
    fontSize: 16,
    fontWeight: "700",
  },
});
