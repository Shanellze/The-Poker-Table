import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export function PauseButton() {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.push("/pause");
      }}
      style={({ pressed }) => [
        styles.pauseButton,
        pressed && styles.pauseButtonPressed,
      ]}
    >
      <View style={styles.menuIcon}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pauseButton: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  pauseButtonPressed: {
    backgroundColor: "#d9d9d9",
  },
  menuIcon: {
    width: 16,
    height: 14,
    justifyContent: "space-between",
  },
  menuLine: {
    width: "100%",
    height: 2,
    borderRadius: 2,
    backgroundColor: "#1a1a1a",
  },
});
