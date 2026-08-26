import { Image, Pressable, StyleSheet, View } from "react-native";
import { getCardImageSource, type Card } from "../utils/deck";

type PlayersHandProps = {
  cards: Card[];
  selectedCards: boolean[];
  onCardPress: (index: number) => void;
};

export function PlayersHand({
  cards,
  selectedCards,
  onCardPress,
}: PlayersHandProps) {
  return (
    <View style={styles.cardContainer}>
      {cards.map((card, index) => (
        <Pressable
          key={card.id}
          style={[styles.card, selectedCards[index] && styles.cardSelected]}
          onPress={() => onCardPress(index)}
        >
          <Image
            source={getCardImageSource(card)}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: "59%",
    height: "28%",
    marginTop: 25,
  },
  card: {
    flex: 1,
    marginHorizontal: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cardSelected: {
    borderWidth: 3,
    borderColor: "yellow",
  },
});
