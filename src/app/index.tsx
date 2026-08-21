import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [showSettings, setShowSettings] = useState(false);
  const [musicSliderValue, setMusicSliderValue] = useState(0.5);
  const [sfxSliderValue, setSfxSliderValue] = useState(0.5);

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
          setShowSettings(true);
        }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>SETTINGS</Text>
      </Pressable>

      {/* Settings Modal */}
      <Modal
        visible={showSettings}
        transparent
        onRequestClose={() => setShowSettings(false)}
      >
        <View style={styles.overlay}>
          <Pressable
            style={styles.overlayTapArea}
            onPress={() => setShowSettings(false)}
          />
          <View style={styles.settingsContainer}>
            {/* Title */}
            <Text style={styles.settingsTitle}>Settings</Text>

            {/* Music Slider */}
            <View style={styles.settingRow}>
              <Text style={styles.settingsText}>Music</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                value={musicSliderValue}
                onValueChange={(value) => setMusicSliderValue(value)}
                minimumTrackTintColor="#1EB1FC"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#1EB1FC"
              />
            </View>

            {/* Sound Effects Slider */}
            <View style={styles.settingRow}>
              <Text style={styles.settingsText}>SFX</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                value={sfxSliderValue}
                onValueChange={(value) => setSfxSliderValue(value)}
                minimumTrackTintColor="#1EB1FC"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#1EB1FC"
              />
            </View>

            {/* Close Button */}
            <Pressable
              onPress={() => setShowSettings(false)}
              style={({ pressed }) => [
                styles.closeButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  overlayTapArea: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  settingsContainer: {
    width: "78%",
    maxWidth: 340,
    borderRadius: 14,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    gap: 8,
  },
  settingsTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  settingsText: {
    fontSize: 16,
    width: 64,
    fontWeight: "600",
  },
  settingRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  closeButton: {
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 46,
    borderRadius: 6,
    backgroundColor: "#f1f1f1",
  },
});
