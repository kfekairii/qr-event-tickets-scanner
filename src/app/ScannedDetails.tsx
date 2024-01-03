import {
  AddIcon,
  Badge,
  BadgeIcon,
  BadgeText,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  CheckIcon,
  HStack,
  Icon,
  LockIcon,
  MessageCircleIcon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "../components";
import { useGlobalSearchParams } from "expo-router";
import { IVisitor } from "../domain/types";
import { ProfileIcon } from "../utils/icons";
import VISITORS from "../domain/visitors.json";

const ScannedDetails = () => {
  const params = useGlobalSearchParams() as any;
  const [visitor, setVisitor] = useState<IVisitor | null>(null);
  const [isErroe, setIsErroe] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    try {
      const _visitor: IVisitor = JSON.parse(params?.visitor);
      if (!_visitor || !_visitor?.id) {
        throw new Error("Invalid Data");
      }
      setVisitor(_visitor);
      setIsValid(!!VISITORS?.find((v) => v.id === _visitor.id));
    } catch (err) {
      console.log(
        "🚀 -> file: ScannedDetails.tsx:16 -> useEffect -> err:",
        err
      );
      setIsErroe(true);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} bg="$blueGray200">
        <HomeHeader title="QR code details" />
        <Box p={24}>
          <Box bg="$white" rounded={"$md"} p={16}>
            <HStack space="md">
              <Box
                alignItems="center"
                justifyContent="center"
                bg="$white"
                p={16}
                rounded={"$full"}
              >
                <Icon as={ProfileIcon} size="md" />
              </Box>
              <VStack space="md">
                <Text
                  color={isValid ? "$primary700" : "$blueGray400"}
                  size="3xl"
                  bold
                >
                  {isErroe ? "#ERROR" : "#" + visitor?.id}
                </Text>
                <VStack space="xs">
                  {visitor?.fullName && (
                    <Text
                      color={isValid ? "$primary700" : "$blueGray400"}
                      bold
                      size="2xl"
                    >
                      {visitor?.fullName}
                    </Text>
                  )}
                  <Badge
                    size="lg"
                    rounded={"$full"}
                    py={"$1"}
                    variant="outline"
                    alignItems="center"
                    justifyContent="center"
                    w={"$2/3"}
                    action={isErroe || !isValid ? "error" : "success"}
                  >
                    <BadgeIcon
                      // @ts-ignore
                      as={isErroe ? LockIcon : CheckIcon}
                      mr={"$2"}
                      size="lg"
                    />
                    <BadgeText bold>
                      {isErroe || !isValid ? "INVALID" : "VALID"}
                    </BadgeText>
                  </Badge>
                </VStack>
              </VStack>
            </HStack>
          </Box>
        </Box>
        <Box position="absolute" bottom={0} p={24} w="$full" bg="$white">
          <Button size="lg" isDisabled={isErroe || !isValid}>
            <ButtonIcon as={AddIcon} mr={4} />
            <ButtonText>Add</ButtonText>
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default ScannedDetails;
