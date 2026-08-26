import { useAudioPlayer } from "expo-audio";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const player = useAudioPlayer(require("../../assets/audio/mainTheme.mp3"));

  useEffect(() => {
    player.loop = true;
    player.play();

    return () => {
      player.pause();
    };
  }, [player]);

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
