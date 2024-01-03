import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { HomeHeader } from "../../components";
import {
  Box,
  Button,
  ButtonText,
  Fab,
  FabIcon,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { QrCodeIcon } from "../../utils/icons";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  const handleScanPressed = () => {
    router.push("/Scanner");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader />
      <Box py={24} px={16} bg="$primary500">
        <HStack
          p={16}
          w={"$full"}
          alignItems="center"
          justifyContent="space-between"
          borderWidth={"$1"}
          borderColor="$blueGray400"
          bg="$primary600"
          rounded={"$md"}
        >
          <Text size={"xl"} color="$primary50">
            Scanned today
          </Text>
          <Text size={"3xl"} bold color="$white">
            35
          </Text>
        </HStack>
      </Box>
      <Box p={16}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text size="2xl" bold color="$blueGray800">
            Tickets
          </Text>
          <Button variant="link">
            <ButtonText>see all</ButtonText>
          </Button>
        </HStack>
      </Box>

      <Fab size="lg" placement="bottom right" onPress={handleScanPressed}>
        <FabIcon as={QrCodeIcon} />
      </Fab>
    </SafeAreaView>
  );
};

export default Home;
