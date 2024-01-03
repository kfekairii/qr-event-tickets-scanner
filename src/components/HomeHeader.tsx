import {
  ArrowLeftIcon,
  Box,
  Button,
  ButtonIcon,
  HStack,
  Icon,
  Text,
} from "@gluestack-ui/themed";
import React from "react";
import { QrCodeIcon } from "../utils/icons";
import { useRouter } from "expo-router";

interface HomeHeaderProps {
  title?: string;
}

const HomeHeader = ({ title }: HomeHeaderProps) => {
  const router = useRouter();
  return (
    <Box bg="$primary500" p={16}>
      <HStack alignItems="center" space="sm">
        {title ? (
          <Button
            variant="outline"
            borderColor="$primary50"
            onPress={() => router.back()}
          >
            <ButtonIcon as={ArrowLeftIcon} color="$primary50" />
          </Button>
        ) : (
          <Icon as={QrCodeIcon} color="$primary0" />
        )}
        {title ? (
          <Text color="$primary0" size={"2xl"}>
            {title}
          </Text>
        ) : (
          <Text color="$primary0" size={"2xl"}>
            Scan
            <Text color="$primary0" size={"2xl"} bold>
              Pro
            </Text>
          </Text>
        )}
      </HStack>
    </Box>
  );
};

export default HomeHeader;
