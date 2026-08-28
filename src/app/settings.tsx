import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAudioSettings } from "../context/audioSettingsContext";

export default function Settings() {
  const router = useRouter();
  const { musicVolume, setMusicVolume, sfxVolume, setSfxVolume } =
    useAudioSettings();

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.overlayTapArea} onPress={() => router.back()} />
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
            value={musicVolume}
            onValueChange={setMusicVolume}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>

        {/* SFX Slider */}
        <View style={styles.settingRow}>
          <Text style={styles.settingsText}>SFX</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={sfxVolume}
            onValueChange={setSfxVolume}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1EB1FC"
          />
        </View>

        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.closeButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
