import { Stack } from "expo-router";

export default function RootLayout() {
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
