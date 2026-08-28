import { useAudioPlayer } from "expo-audio";
import { Stack } from "expo-router";
import { useEffect } from "react";
import {
  AudioSettingsProvider,
  useAudioSettings,
} from "../context/audioSettingsContext";

function AppStack() {
  const { musicVolume } = useAudioSettings();
  const player = useAudioPlayer(require("../../assets/audio/mainTheme.mp3"));

  useEffect(() => {
    player.loop = true;
    player.volume = musicVolume;
    player.play();

    return () => {
      player.pause();
    };
  }, [player]);

  useEffect(() => {
    player.volume = musicVolume;
  }, [player, musicVolume]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="pause"
        options={{ presentation: "transparentModal", animation: "fade" }}
      />
      <Stack.Screen
        name="instructions"
        options={{ presentation: "transparentModal", animation: "fade" }}
      />
      <Stack.Screen
        name="settings"
        options={{ presentation: "transparentModal", animation: "fade" }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AudioSettingsProvider>
      <AppStack />
    </AudioSettingsProvider>
  );
}
