import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Poker Table</Text>

      <Pressable
        onPress={() => {
          router.push("/game");
        }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>PLAY</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("Pressable Pressed");
        }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>SETTINGS</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 52,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: "lightgray",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
