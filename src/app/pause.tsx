import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Pause() {
  const router = useRouter();

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.overlayTapArea} onPress={() => router.back()} />

      <View style={styles.pauseCard}>
        <Text style={styles.pauseTitle}>Paused</Text>

        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.pauseButton,
            pressed && styles.pauseButtonPressed,
          ]}
        >
          <Text style={styles.pauseButtonText}>RESUME</Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/game")}
          style={({ pressed }) => [
            styles.pauseButton,
            pressed && styles.pauseButtonPressed,
          ]}
        >
          <Text style={styles.pauseButtonText}>RESTART</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/settings")}
          style={({ pressed }) => [
            styles.pauseButton,
            pressed && styles.pauseButtonPressed,
          ]}
        >
          <Text style={styles.pauseButtonText}>SETTINGS</Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace("/")}
          style={({ pressed }) => [
            styles.pauseButton,
            styles.exitButton,
            pressed && styles.exitButtonPressed,
          ]}
        >
          <Text style={styles.pauseButtonText}>EXIT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  overlayTapArea: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  pauseCard: {
    width: "72%",
    maxWidth: 360,
    borderRadius: 14,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  pauseTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },
  pauseButton: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  pauseButtonPressed: {
    backgroundColor: "#dfdfdf",
  },
  exitButton: {
    backgroundColor: "#e45757",
  },
  exitButtonPressed: {
    backgroundColor: "#c94545",
  },
  pauseButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
