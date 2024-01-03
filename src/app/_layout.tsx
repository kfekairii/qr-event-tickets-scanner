import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Root() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false, animation: "none" }} />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
