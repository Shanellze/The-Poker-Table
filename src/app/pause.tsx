import { StyleSheet, Text, View } from "react-native";

export default function Pause() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text>This is the pause menu.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
});
