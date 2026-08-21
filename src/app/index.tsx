import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.text}>The Poker Table</Text>

      {/* Play Button */}
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

      {/* Settings Button */}
      <Pressable
        onPress={() => {
          router.push("/settings");
        }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>SETTINGS</Text>
      </Pressable>

      {/* Instructions Button */}
      <Pressable
        onPress={() => {
          router.push("/instructions");
        }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>INSTRUCTIONS</Text>
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
